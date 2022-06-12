import React, { Component } from 'react';
import './mathGame/App.css';
import { Header } from './add_items_app/header';
import { Form } from './add_items_app/form';
import { DeleteButton } from './add_items_app/delete_button';
import { ItemsList } from './add_items_app/items_list';


export class ItemsApp extends Component {
    state = {
        items: [],
    };



    addItem = item_name => {
        this.setState(() => {
            return ({
                items: [...this.state.items, item_name]
            })
        })
    };

    deleteLastItem = event => {
        this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
    };

    inputIsEmpty = () => {
        return this.state.value === '';
    };

    noItemsFound = () => {
        return this.state.items.length === 0;
    };

    render() {
        return (
            <div className="App">
                <Header titleName={'Shopping List'} />
                <Form inputIsEmpty={this.inputIsEmpty} submit={this.addItem} />
                <DeleteButton deleteLastItem={this.deleteLastItem} noItemsFound={this.noItemsFound} />
                <ItemsList items={this.state.items} />
            </div>
        );
    }
}
