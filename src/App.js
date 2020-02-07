import React from 'react';
import Lottery from './Lottery/Lottery';
import './App.css';

function App() {

  return (
    <div className="App">
      <Lottery name = 'National Lottery' numBalls = {6} maxNumber = {40}/>
      <Lottery name = 'Mini Daily' numBalls = {4} maxNumber = {10}/>
    </div>
  );
}

export default App;
