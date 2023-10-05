import { FC } from 'react';
import { IData } from '../types/api';

interface ICardProps {
  post: IData
}

const Card: FC<ICardProps> = ({post}) => {
  const {userId, title, body} = post;
  return (
    <div className=' flex flex-col p-4 gap-3 rounded relative  border-solid border-black border bg-white'>
      <div className=' absolute top-1 right-2'>{userId}</div>
      <h2 className=' font-roboto text-md font-bold uppercase'>{title}</h2>
      <div></div>
      <p className=' font-roboto'>{body}</p>
    </div>
  )
}

export default Card