import { ChangeEvent, FC } from "react";

interface ISearchBarProps {
  value: string,
  onChangeValue: (event: ChangeEvent<HTMLInputElement>) => void,
}

const SearchBar: FC<ISearchBarProps> = ({value, onChangeValue}) => {
  return (
    <>
      <input className=" outline-none rounded-md p-2" type="text" value={value} onChange={onChangeValue} />
    </>
  )
}

export default SearchBar;