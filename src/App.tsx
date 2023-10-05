import './styles/App.css'
import SearchBar from './Components/SearchBar';
import Card from './Components/Card';
import BubbleId from './Components/BubbleId';
import BubblesContainer from './Containers/BubblesContainer';
import CardsContainer from './Containers/CardsContainer';
import FiltersContainer from './Containers/FiltersContainer';
import IdsComboBox from './Components/IdsComboBox';
import { useData } from './Hooks/useData';
import Header from './Containers/Header';
import IdsFilters from './Containers/IdsFilters';

function App() {

  const {
    posts,
    ids,
    filterByIds,
    value,
    selectedValue,
    handleInputChange,
    handleSelectChange,
    handleRemoveId
  } = useData();

  

  return (
    <>
      <div className=' w-screen bg-slate-100'>
        <main className=' mx-auto w-full lg:max-w-5xl flex flex-col gap-10'>
          <Header>
            <h1 className=' font-bold text-3xl uppercase text-center'>Technical Test</h1>
            <FiltersContainer>
                <SearchBar value={value} onChangeValue={handleInputChange}/>
                <IdsFilters>
                  <IdsComboBox 
                    userIds={ids}
                    selectedValue={selectedValue}
                    handleSelectChange={handleSelectChange}
                    />
                  <BubblesContainer>
                    {filterByIds.map(id =>
                      <BubbleId key={id} id={id} handleRemoveId={handleRemoveId}/>
                      )}
                  </BubblesContainer>
                </IdsFilters>
            </FiltersContainer>
          </Header>
          <CardsContainer>
            {posts?.map(post => <Card key={post.id} post={post}/>)}
          </CardsContainer>
        </main>
      </div>
    </>
  )
}

export default App
