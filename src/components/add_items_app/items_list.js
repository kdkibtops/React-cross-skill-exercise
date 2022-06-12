import React, { Component } from 'react';
import './../mathGame/App.css';


export class ItemsList extends Component {
    render() {
        return (
            <div>
                <p className="items">Items</p>
                <ol className="item-list">
                    {this.props.items.map((item, index) => <li key={index}>{item}</li>)}
                </ol>
            </div>
        )
    }
}
