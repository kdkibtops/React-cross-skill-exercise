import React, { Component } from 'react';
import './../mathGame/App.css';

export class DeleteButton extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.deleteLastItem} disabled={this.props.noItemsFound()}>
                    Delete Last Item
                </button></div>

        )
    }
}
