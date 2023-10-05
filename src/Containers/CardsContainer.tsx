import {FC} from 'react'
import { IContainer } from '../types/common';

const CardsContainer: FC<IContainer>  = ({children}) => {
  return (
    <section className=' grid grid-cols-1 min-h-[60vh] mx-4 md:grid-cols-2 md:gap-4 lg:grid-cols-3 gap-3 xl:grid-cols-4 p-4 bg-slate-300 rounded-lg'>
      {children}
    </section>
  )
}

export default CardsContainer
