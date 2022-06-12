import React, { Component } from 'react';
import { AddButton } from './addButton';


export class UsernameInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            username: '',
            played: 0

        }

    }
    updateState(event) {
        event.preventDefault();
        this.setState(() => {
            return (
                {
                    [event.target.id]: event.target.value
                }
            )
        })
    }
    addUser = () => {
        const user_input = this.state
        // to empty all fields
        this.setState({
            firstname: '',
            lastname: '',
            username: '',
            played: 0
        })
        this.props.OnAddUser(user_input)
    }
    validateFields = () => {
        if (
            this.state.firstname === '' ||
            this.state.lastname === '' ||
            this.state.username === ''
        ) {
            return true;
        } else {
            return false
        }
    }
    render() {
        return (
            <div>
                <input
                    id={'firstname'}
                    type="text"
                    placeholder="First name"
                    value={this.state.firstname}
                    onChange={(event) => { this.updateState(event) }}
                />
                <input
                    id={'lastname'}
                    type="text"
                    placeholder="Last Name"
                    value={this.state.lastname}
                    onChange={(event) => { this.updateState(event) }}
                />
                <input
                    id={'username'}
                    type="text"
                    placeholder="User Name"
                    value={this.state.username}
                    onChange={(event) => { this.updateState(event) }}
                />
                <AddButton OnAdd={this.addUser} isDisabled={this.validateFields} />
            </div>
        )
    }

}