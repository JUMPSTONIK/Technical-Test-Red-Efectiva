
interface ITitleProps{
    tittle: string;
}

const Tittle = (props : ITitleProps) => {
    const {tittle} = props

  return (
    <h1 className='font-bold text-3xl uppercase text-center'>
        {tittle}
    </h1>
  )
}

export default Tittle