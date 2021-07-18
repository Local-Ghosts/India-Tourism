import './App.css';
import ImgMediaCard from './components/Card/ImgMediaCard'
import { data } from './components/Card/data.js'

function App() {

  let cards = data.map(item => {
    return <ImgMediaCard item = {item}/>
  })

  return (
    <div className="App">
      <div className="cards">
        {cards}
      </div>
    </div>
  );
}

export default App;
