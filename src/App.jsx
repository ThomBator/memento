import React from 'react';
import logo from './logo.svg';
import {useState, useEffect} from 'react';
import Card from './components/Card';
import shuffle from './utilities/shuffle';
import './App.css';

function App() {

  const [cards, setCards] = useState(shuffle());


    return (
    <>

     <div className="grid">
        {cards.map((card)=> {
          const { image, id} = card;
          {console.log(cards);}
          return (
            <Card
              key={id}
              image={image}
              />
          )
        })}
     </div>
    </>
  );
}

export default App;
