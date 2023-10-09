import { FC } from "react"
import { IContainer } from "../types/common"

const Main:FC<IContainer> = ({children}) => {
  return (
    <main className='mx-auto w-full lg:max-w-5xl flex flex-col gap-10'>
        {children}
    </main>
  )
}

export default Main