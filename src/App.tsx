import './styles/App.css'
import SearchBar from './Components/SearchBar';
import Card from './Components/Card';
import BubbleId from './Components/BubbleId';
import BubblesContainer from './Containers/BubblesContainer';
import CardsContainer from './Containers/CardsContainer';
import FiltersContainer from './Containers/FiltersContainer';
import IdsComboBox from './Components/IdsComboBox';
import Header from './Containers/Header';
import IdsFilters from './Containers/IdsFilters';
import { useData } from './Hooks/useData';
import Main from './Containers/Main';
import Tittle from './Components/Tittle';

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
      <div className='w-screen bg-slate-100'>
        <Main>
          <Header>
            <Tittle tittle="Technical Test"/>
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
        </Main>
      </div>
    </>
  )
}

export default App
