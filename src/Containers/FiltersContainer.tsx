import { FC } from "react"
import { IContainer } from "../types/common"

const FiltersContainer: FC<IContainer> = ({children}) => {
  return (
    <section className=" flex flex-col gap-5 ">
      {children}
    </section>
  )
}

export default FiltersContainer