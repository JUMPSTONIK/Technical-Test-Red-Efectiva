import { FC } from 'react'
import { IContainer } from '../types/common';

const IdsFilters: FC<IContainer> = ({children}) => {
  return (
    <div className='flex gap-4'>
        {children}
    </div>
  )
}

export default IdsFilters