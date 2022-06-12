import React, { Component } from 'react';
import './assets/App.css';
import { Header } from '../add_items_app/header'
import { UsernameInput } from '../exercise1-all-together/username_input'
import { UsersList } from './usersList';
import { ToggleButton } from './toggleButton';

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

export class VideoGame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            updated: true,
            users: [],
            showPlayed: true,
            values: {
                firstname: '',
                lastname: '',
                username: '',
                played: 0
            }
        }
    }

    checkUserPresent(username) {
        const usernamesArr = this.state.users.map((user) => {
            return user.username;
        })
        if (usernamesArr.includes(username)) {
            return false
        } else {
            return true
        }
    }
    addNewUser = (user_input) => {
        const { firstname, lastname, username } = user_input
        const userNameAvailable = this.checkUserPresent(username);
        if (userNameAvailable) {
            const newUser = { firstname: firstname, lastname: lastname, username: username, played: 0 }
            this.setState(() => {
                return {
                    users: [...this.state.users, newUser]
                }
            }
                // , () => console.log('Callback function: this will be executed only after component state is updated')
            )
        } else {
            alert(`Username: ${username} is already used`)
        }
    }
    // componentDidUpdate() {
    //     console.log('componentDidUpdate(): this will be executed only after component state is updated')
    // }
    showPlayed = () => {
        this.setState((oldState) => {
            return { showPlayed: !oldState.showPlayed }
        })
    }
    addNewGame = (user_name) => {
        const updatedUser = this.state.users.filter((ele, index) => {
            return ele.username === user_name
        })
        updatedUser[0].played = updatedUser[0].played + 1;
        // this is just to preserve the arrangment of the array so that users still appear in their initial order
        const updated_users = this.state.users.map((ele) => {
            if (ele.username === user_name) {
                return (updatedUser[0])
            } else {
                return ele
            }
        })

        this.setState(() => {
            return {
                users: updated_users
            }
        })
    }

    render() {
        return (
            <div className="App">
                <Header titleName={'Video Game'} />
                <UsernameInput OnAddUser={this.addNewUser} values={this.state.values} />
                <ToggleButton OnToggle={this.showPlayed} showPlayed={this.state.showPlayed} />
                <UsersList users={this.state.users.sort()} showPlayed={this.state.showPlayed} OnAddGame={this.addNewGame} />
            </div>
        );
    }
}

