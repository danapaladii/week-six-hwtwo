import { useState } from "react";
import { data } from "./data";
import './App.css';

function App() {

  const [city, setCity] = useState(0);
  const {name, description, source, image} = data[city];

  const previousCity = () => {
    setCity((city => {
      city --;
      if (city < 0) {
        return data.length-1;
      }
      return city;
    }))
  }

  const nextCity = () => {
    setCity((city => {
      city ++;
      if (city > data.length-1) {
        city = 0;
      }
      return city;
    }))
  }

  return (
    <div>
      <div className="container">
        <img src={image} width="500px" alt="city" />
      </div>

      <div className="container">
        <h1>{name}</h1>
      </div>

      <div className="container">
        <p>{description}</p>
      </div>

      <div className="container">
        <h3>Source: {source}</h3>
      </div>

      <div className="btn container">
        <button onClick={previousCity}>Previous</button>
        <button onClick={nextCity}>Next</button>
      </div>
      
    </div>
  );
}

export default App;
