import React, { Component } from 'react';
import './../mathGame/App.css';
import logo from './../mathGame/logo.svg'


export class Header extends Component {
    render() {
        return (
            <div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">ReactND - Coding Practice</h1>
                </header>
                <h2>{this.props.titleName}</h2>
            </div>
        )
    }
}
