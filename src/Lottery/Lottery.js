import React, {Component} from 'react';
import Ball from '../Ball/Ball';
import './Lottery.css';

class Lottery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ballArray: Array.from({length: this.props.numBalls}),
            numberArray: Array.from({length: this.props.numBalls})
        }
        this.calculateBalls = this.calculateBalls.bind(this);
        this.calculateNumber = this.calculateNumber.bind(this);
        this.generateNumbers = this.generateNumbers.bind(this);
    }

    calculateBalls() {
        return this.state.ballArray.map(ball => <li key={ball}>{<Ball number={ball} />}</li>);
    }

    calculateNumber() {
        return Math.floor(Math.random() * this.props.maxNumber);
    }

    generateNumbers() {
        let num = this.calculateNumber()
        for (let i = 0; i < this.props.numBalls; i++ ){
            this.state.numberArray.push(num);
        }
        console.log(this.state.numberArray);
    }
    
    render() {
        return (
        <div className="Lottery">
            <h3 className="Lottery-title">{this.props.name}</h3>
            <div>
                <ul className="Lottery-balls">
                    {this.calculateBalls()}
                </ul>
            </div>
            <button className="Lottery-button" onClick={this.generateNumbers}>Play</button>
        </div>
        );
    }
}

export default Lottery;