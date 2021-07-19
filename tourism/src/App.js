import './App.css';
import ImgMediaCard from './components/Card/ImgMediaCard'
import { data } from './components/Card/data.js'
import Carousel from 'react-elastic-carousel';

function App() {

  let cards = data.map(item => {
    return <ImgMediaCard item = {item}/>
  })

  const breakPoints = [
  { width: 1, itemsToShow: 1},
  {width: 500, itemsToSHow: 2},
  { width: 750, itemsToShow: 2.8 },
  { width: 1130, itemsToShow: 3.8 },
];

  return (
    <div className="App">
      <div className="cards">
        <Carousel breakPoints={breakPoints}>
          {cards}
        </Carousel>
      </div>
    </div>
  );
}

export default App;
