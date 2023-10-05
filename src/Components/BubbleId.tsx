import { FC } from "react"

interface IBubbleProps {
  id: number,
  handleRemoveId: (id:number) => void
}

const BubbleId:FC<IBubbleProps> = ({id, handleRemoveId}) => {
  return (
    <div className=" flex items-center gap-4 h-fit rounded-full  bg-gray-200 py-1 px-3">
      <p className=" text-lg">{id}</p>
      <button 
        className="font-bold font-roboto rounded-full bg-slate-50 px-1 text-red-600 m-0"
        onClick={() => handleRemoveId(id)}
        >X</button>
    </div>
  )
}

export default BubbleId