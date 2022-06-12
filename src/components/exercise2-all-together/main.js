import React, { Component } from 'react';
import './assets/App.css';
import { Header } from '../add_items_app/header';

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

const users = [{ username: 'Amy' }, { username: 'John' }];


export class ChatApp extends Component {
    /*
    If the user did not type anything, he/she should not be
    allowed to submit.
    */
    constructor(props) {
        super(props);
        this.state = {
            users: users,
            messages: [],

        }
    }

    sendMsg = (username, msg) => {
        const newMessages = [...this.state.messages, { username: username, text: msg }]
        this.setState(() => {
            return {
                messages: newMessages
            }
        })
    }

    isDisabled = () => {
        return false;
    };

    render() {
        return (
            <div className="App">
                <Header titleName={'Chat app'} />
                <ChatContainer
                    users={this.state.users}
                    messages={this.state.messages}
                    OnSend={this.sendMsg}
                />
            </div>
        );
    }
}

export function ChatContainer(props) {
    return (
        <div className='container'>
            {props.users.map((ele) => {
                return (
                    <ChatWindow
                        key={ele.username}
                        username={ele.username}
                        messages={props.messages}
                        OnSend={props.OnSend}
                    />
                )
            })}
        </div>
    )
}

export class ChatWindow extends Component {
    render() {
        return (
            <div className="chat-window">
                <ChatWindowHeader username={this.props.username} />
                <MessageList messages={this.props.messages} username={this.props.username} />
                <InputGroup
                    username={this.props.username}
                    OnSend={this.props.OnSend}
                />
            </div>
        )
    }

}

export function ChatWindowHeader(props) {
    return (
        <div>
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{props.username}</div>
        </div>
    )
}

export function MessageList(props) {

    return (
        <ul className="message-list">
            {props.messages.map((message, index) => (
                <li
                    key={index}
                    className={
                        message.username === props.username ? 'message sender' : 'message recipient'
                    }
                >
                    <p>{`${message.username}: ${message.text}`}</p>
                </li>
            ))}
        </ul>

    )
}

export class InputGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: this.props.username,
            input_value: ''
        }
    }

    updateInput = (msg) => {
        this.setState(() => {
            return { input_value: msg }
        })
    }
    clearField = () => {
        this.setState(() => {
            return { input_value: '' }
        })
    }

    isDisabled = () => {
        if (this.state.input_value === '') {
            return true
        } else {
            return false;
        }
    };
    render() {
        return (
            <div>
                <form className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your message..."
                        value={this.state.input_value}
                        onChange={(event) => {
                            this.updateInput(event.target.value)
                        }}
                    />
                    <div className="input-group-append">
                        <button
                            className="btn submit-button"
                            disabled={this.isDisabled()}
                            onClick={(event) => {
                                event.preventDefault()
                                this.props.OnSend(this.state.username, this.state.input_value)
                                this.clearField()
                            }
                            }>
                            SEND
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}