import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Character from './components/Character';
import Deets from './components/Deets';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [current, setCurrent] = useState('');

  const openInfo = id => {
    setCurrent(id)
  }

  const closeInfo = () => {
    setCurrent(null)
  }

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/`)
    .then(res => {
      console.log(res);
      setCharacters(res.data);
    })
    .catch(err =>
      console.log('Done goofed somewhere'));
  }, []);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Reactomundo</h1>
      {characters.map((c, index) => {
        return <Character key={c[index]} info={c} action={openInfo}/>
      })}
      {/* {
        current && <Deets characterID={current} close={closeInfo}/>
      } */}
    </div>
  );
}

export default App;
