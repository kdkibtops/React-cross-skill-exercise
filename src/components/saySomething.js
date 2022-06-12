import React, { Component } from 'react';
import './mathGame/App.css';


export class SaySomething extends Component {

    state = { userInput: 'This should mirror the text you typed into the input field.' }

    updateInput = (user_input) => {
        this.setState(() => {
            return { userInput: user_input }
        })
    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    <input type="text" placeholder="Say Something" onChange={(event) => { this.updateInput(event.target.value) }} />
                    <p className="echo">Echo:</p>
                    <p>{this.state.userInput}</p>

                </div>
            </div>
        );
    }
}

