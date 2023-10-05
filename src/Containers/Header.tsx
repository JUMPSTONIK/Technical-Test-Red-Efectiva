import {FC} from 'react'
import { IContainer } from '../types/common'

const Header : FC<IContainer> = ({children}) => {
  return (
    <div className=" mt-12 p-4 gap-8 flex flex-col">
        {children}
    </div>
  )
}

export default Header