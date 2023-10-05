import { ChangeEvent } from "react";

interface IComboBoxProps{
  userIds: number[],
  selectedValue: number,
  handleSelectChange : (event: ChangeEvent<HTMLSelectElement>) => void

}

const IdsComboBox = (props:IComboBoxProps) => {
  const {userIds, selectedValue, handleSelectChange} = props; 

  
  return (
    <div className=" flex flex-col gap-4 w-fit">
      <label className=" font-medium" htmlFor="dropdown">Select Ids to filter</label>
      <select 
        className="p-1"
        name="userIds" 
        id="dropdown"
        value={selectedValue}
        onChange={(e)=>handleSelectChange(e)}
        >
        {userIds.map(item => 
        <option 
          key={item} 
          value={item} 
        >
          {item}
        </option>)}
      </select>
    </div>
  )
}

export default IdsComboBox