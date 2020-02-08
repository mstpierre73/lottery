import React from 'react';
import './Ball.css';

function Ball(props) {
  console.log('myProp', props)
    return (
      <div className = "Ball" >
        <p className = "Ball-number">{props.num}</p>
      </div>
    );
  }
  
  export default Ball;