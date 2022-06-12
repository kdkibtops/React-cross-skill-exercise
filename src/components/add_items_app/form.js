import React, { Component } from 'react';
import './../mathGame/App.css';

export class Form extends Component {
    state = { value: '' }

    updateState = (user_input) => {
        this.setState(() => {
            return {
                value: user_input
            }
        })
    }

    inputIsEmpty = () => {
        return this.state.value === ''
    }

    onSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.value)
        this.props.submit(this.state.value)
    }

    render() {
        return (
            <div>
                <form onSubmit={(event) => {
                    this.onSubmit(event)
                }}>
                    <input
                        type="text"
                        placeholder="Enter New Item"
                        value={this.state.value}
                        onChange={event => this.updateState(event.target.value)}
                    />
                    <button disabled={this.inputIsEmpty()}>Add</button>
                </form>
            </div>
        )
    }
}