import React, { Component } from 'react';
import PropTypes from 'prop-types';
/**N.B. if you create a method for the Class, you need to use .bind(this) if you define the function
 * or you can declare it as constant instead:
 * For instance
  * Example 1
    logToConsole(someText){
      consoel.log(someText)
    }
    * In example 1, if you need to pass this function as a prop to component, you have to use .bind(this)
    * ==> onLog = {this.logToConsole.bind(this)}
    * and it will be better to make this in constructor to avoid creating new function each time
    * so you can put in the constructor:
    * this.logToConsole = this.logToConsole.bind(this)
    * this is because here logToConsole() is a function itself that you can call.
  *Example 2: 
    logToConsole = (someText)=>{
      console.log(someText)
    }
    * In example 2, you will pass this function as a prop to component as it is wihtout .bind(this)
    * ==> onLog={this.logToConsole}
    * Here logToConsole is a variable referring to an anonymous function (alias)
 */
// N.B. in reacts components, don't add () after the onclick function, or it will keep on calling without being invoked and crash the app
export const contacts = [
    {
        "id": "karen",
        "name": "Karen Isgrigg",
        "handle": "karen_isgrigg",
        "avatarURL": "http://localhost:5001/karen.jpg"
    },
    {
        "id": "richard",
        "name": "Richard Kalehoff",
        "handle": "richardkalehoff",
        "avatarURL": "http://localhost:5001/richard.jpg"
    },
    {
        "id": "tyler",
        "name": "Tyler McGinnis",
        "handle": "tylermcginnis",
        "avatarURL": "http://localhost:5001/tyler.jpg"
    }
];

// Stateless functional Component Example
export function ListContactsFunction(props) {
    const contacts = props.contacts
    return (
        <ol className='contact-list'>
            {contacts.map((ele) => {
                return (
                    <li key={ele.id} className='contact-list-item'>
                        <div className='contact-avatar'
                            style={{
                                backgroundImage: `url(${ele.avatarURL})`
                            }}>
                        </div>
                        <div className='contact-details'>
                            <p>{ele.name}</p>
                            <p>@{ele.handle}</p>
                        </div>
                        <button className='contact-remove' onClick={() => { props.onDeleteContact(ele) }}>
                            Remove
                        </button>
                    </li>
                )
            })}
        </ol>
    )
}
// adding props types to the functional component
ListContactsFunction.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// Class components
export class ListContacts extends Component {
    // adding props types to Class Component
    static propTypes = {
        contacts: PropTypes.array.isRequired,
        onDeleteContact: PropTypes.func.isRequired
    }
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        }


    }
    // state can be declared directly without constructor as follows
    // state = {}
    updateQuery = (queryString) => {
        this.setState(() => {
            return (
                { query: queryString.trim() }
            )
        })
    }
    clearQuery = () => {
        this.setState(() => {
            return { query: '' }
        })
    }
    render() {
        const { query } = this.state
        const { contacts, onDeleteContact } = this.props
        const showingContacts = query === ''
            ? contacts
            : contacts.filter((ele) => {
                return ele.name.toLowerCase().includes(query.toLowerCase());
            })
        const listLength = query === '' ? 'all' : showingContacts.length
        return (
            <div className='list-contacts'>
                <SearchField updateQuery={this.updateQuery} value={this.state.query} />
                {/* Below is a way of if Condition, where expression after && will only executes if condition is truthy 
                this is called gaurd up operator*/}
                {showingContacts.length !== contacts.length && (
                    <div className='showing-contacts'>
                        <span>Now showing {listLength} of {contacts.length} contacts </span>
                        <button onClick={this.clearQuery} >Show all</button>
                    </div>
                )}
                <ContactsList list={showingContacts} onDeleteContact={onDeleteContact} />
            </div>
        )
    }
}

class SearchField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: this.props.value
        }
    }
    updateQuery = (query_string) => {
        this.setState(() => {
            return {
                query: query_string.trim()
            }
        })
    }
    render() {
        // const { query } = this.state
        return (
            <div className='list-contacts-top'>
                <input
                    className='search-contacts'
                    type='text'
                    placeholder='Search Contacts'
                    // Here you will update the state of the parent component which will pass its state as a prop to this component
                    value={this.props.value}
                    onChange={(event) => {
                        this.props.updateQuery(event.target.value)
                    }}
                // Here the component updates its own state so it can act as a standalone independant from its parent, althoug this seems to be more efiicient but I will not use it to follow up correctly with udacity project
                // value={this.state.query}
                // onChange={(event) => {
                //     this.updateQuery(event.target.value);
                // }}
                ></input>
            </div >
        )
    }
}
class ContactsList extends Component {
    static propTypes = {
        list: PropTypes.array.isRequired,
        onDeleteContact: PropTypes.func.isRequired
    }
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <ol className='contact-list'>
                {this.props.list.map((ele) => {
                    return (
                        <li key={ele.id} className='contact-list-item'>
                            <div className='contact-avatar'
                                style={{
                                    backgroundImage: `url(${ele.avatarURL})`
                                }}>
                            </div>
                            <div className='contact-details'>
                                <p>{ele.name}</p>
                                <p>@{ele.handle}</p>
                            </div>
                            <DeleteButton contact={ele} onDeleteContact={this.props.onDeleteContact} />

                        </li>
                    )
                })}
            </ol>
        )
    }
}

export class DeleteButton extends Component {
    static propTypes = {
        contact: PropTypes.object.isRequired,
        onDeleteContact: PropTypes.func.isRequired
    }
    constructor(props) {
        super(props);
        this.contact = this.props.contact
    }
    render() {
        return (
            <button className='contact-remove' onClick={() => { this.props.onDeleteContact(this.contact) }}>
                Remove
            </button>
        )
    }
}



// not used in current project
export class ContactList extends Component {
    static propTypes = {
        contacts: PropTypes.array.isRequired,
        listName: PropTypes.string.isRequired
    }
    render() {
        const people = this.props.contacts;
        const listName = this.props.listName;
        return (
            <ol>
                <p className='para' key='paragraph'>{listName}</p>
                {people.map(ele => <li key={ele.name}>{ele.name}</li>)}
            </ol>
        )

    }
}

