import React, { Component } from 'react'

class Calculator extends Component {

    state = {
        num1: 0,
        num2: 0,
        sum: 0
    }

    setNum = (e, num) => {
        this.setState({
          [num]: parseInt(e.target.value)
        })
    }

    sum = (e) => {
        // console.log(this.state.num1)
        // console.log(this.state.num2)
        this.setState({
            sum: (this.state.num1) + (this.state.num2),
        })
        // console.log(this.state.sum)
    }

    render() {
        return (
            <div className="container">
                <h1>Add with React!</h1>

                <div className="add">
                    <input className="input" type="number"
                    name="num1"
                    placeholder={this.state.num1}
                    value={this.state.num1}
                    onChange={ (e) => this.setNum(e, 'num1') }
                    />
                    <span>+</span>
                    <input className="input" type="number"
                    name="num2"
                    placeholder={this.state.num2}
                    value={this.state.num2}
                    onChange={ (e) => this.setNum(e, 'num2') }
                    />
                    <button className="btn" onClick={this.sum}>=</button>
                    <h3>Addition results go here!</h3>
                    <p>Result: {this.state.sum}</p>
                </div>
            </div>
        )
    }
}

export default Calculator
