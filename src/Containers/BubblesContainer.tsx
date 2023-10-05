import { FC } from "react"
import { IContainer } from "../types/common";

const BubblesContainer: FC<IContainer> = ({children}) => {
  return (
    <div className="w-full flex flex-wrap bg-white rounded-xl p-2 gap-2">
      {children}
    </div>
  )
}

export default BubblesContainer