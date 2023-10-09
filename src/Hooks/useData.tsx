import { useEffect, useState, ChangeEvent} from "react"
import axios from 'axios'
import { IData } from '../types/api';

// eslint-disable-next-line react-refresh/only-export-components
const URL = 'https://jsonplaceholder.typicode.com/posts'

export const useData = () => {

    const [data, setData] = useState<IData[] | null>(null)
    const [posts, setPosts] = useState<IData[] | null>(null)
    const [ids, setIds] = useState<number[]>([])
    const [selectedValue, setSelectedValue] = useState<number>(0);
    const [filterByIds, setFilterByIds] = useState<number[]>([])
    const [value, setValue] = useState<string>('')

    useEffect(() => {
        (async() => {
            try {
                const rta = await axios.get<IData[]>(URL)
                let data = rta.data;
                data = data.sort((a, b) => {
                    return a.title.localeCompare(b.title);
                });
                
                let filteredUserIds: number[] = [];
                for(let i=0; i<data.length; i++){
                    if(!filteredUserIds.includes(data[i].userId)){
                        filteredUserIds.push(data[i].userId);
                    }
                }
                filteredUserIds = filteredUserIds.sort( (a,b)=> a-b)
                setIds(filteredUserIds)

                setData([...rta.data])
            } catch (error) {
                console.log(error)
            }
        })()
    }, [])

    useEffect(() => {

        let filteredPostsByUserId: IData[] = []
        let filteredPostsByValue: IData[] = []
        if (filterByIds.length && data) {
            for (const id of filterByIds) {
                const filteredValues = data?.filter(value => value.userId === id)
                filteredPostsByUserId = [...filteredValues, ...filteredPostsByUserId]
                
            }
            filteredPostsByValue = filteredPostsByUserId.filter(item => item.body.toUpperCase().includes(value.toUpperCase()) )
        }else{
            if (data) {
                filteredPostsByValue = data.filter(item => item.body.toUpperCase().includes(value.toUpperCase()) )
            }
        }
        
        const postsOrdered = filteredPostsByValue.sort((a, b) => {
            return a.title.localeCompare(b.title);
        });
        // console.log(postsOrdered)
        setPosts(postsOrdered)
    
    }, [data, filterByIds, value])
    
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) =>{
        setValue(event.target.value)
    }

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = parseInt(event.target.value)
        console.log(value)
        setSelectedValue(value);
        if(!filterByIds.includes(value)){
            setFilterByIds([...filterByIds, value])
        }
    };

    const handleRemoveId = (id : number) =>{
        setFilterByIds(filterByIds.filter(val => val !== id))
    }


  return {
    posts,
    ids,
    filterByIds,
    value,
    selectedValue,
    handleInputChange,
    handleSelectChange,
    handleRemoveId
  }
}

