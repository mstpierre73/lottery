import React, {Component} from 'react';
import Ball from '../Ball/Ball';
import './Lottery.css';

class Lottery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nums: Array.from({length: this.props.numBalls})
        };
        this.handleClick = this.handleClick.bind(this);
    }

    generateNumbers() {
        this.setState( curState => ({
            nums: curState.nums.map(
                n => Math.floor(Math.random() * this.props.maxNumber) + 1
                )
        }));
        
        console.log(this.state.nums);
    }

    handleClick() {
        this.generateNumbers();
    }
    
    render() {
        return (
        <div className="Lottery">
            <h3 className="Lottery-title">{this.props.name}</h3>
            <div>
                <div className="Lottery-balls">
                    {this.state.nums.map(n => (
                    <Ball num={n} />
                    ))}
                </div>
            </div>
            <button className="Lottery-button" onClick={this.handleClick}>Play</button>
        </div>
        );
    }
}

export default Lottery;