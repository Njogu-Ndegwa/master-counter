import React from 'react';
import Counter from './counter';

export default class MasterCounter extends React.Component {

    state = {
        counter1: 0,
        counter2: 0,
        counter3: 0
    }

    handleIncrement = (index) => {
        const count = `counter${index}`
        this.setState({[count]: this.state[count] + 1});
    }


    handleDecrement = (index) => {
        const count = `counter${index}`
        this.setState({[count] : this.state[count] - 1})
        
    }

    handleIncrementAll = () => {
        for(let index = 1; index < 3; index++) {
            this.handleIncrement(index);
        }
    }

    handleDecrementAll = () => {
        for (let index = 1; index < 3; index++) {
            this.handleDecrement(index)
        }
    }

    render() {
        const {counter1, counter2, counter3} = this.state;
        return (
            <div>
            <Counter 
            onIncrement={this.handleIncrement} 
            onDecrement={this.handleDecrement} 
            counter={counter1}
            index={1}
            
            />
            <Counter 
            onIncrement={this.handleIncrement} 
            onDecrement={this.handleDecrement} 
            counter={counter2} 
            index={2}
            />
            <Counter 
            onIncrement={this.handleIncrement} 
            onDecrement={this.handleDecrement} 
            counter={counter3} 
            index={3}
            />
            <span><button onClick={this.handleDecrementAll} >- all</button> <button onClick ={this.handleIncrementAll} >+ all</button></span>
        </div>
        )
    }

}