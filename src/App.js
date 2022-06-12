import './App.css';
import { Component } from 'react';
// eslint-disable-next-line
import { profiles, users, movies, MoviesList, MovieUser, MoviesListFunction } from './components/ListMovies';
// eslint-disable-next-line
import { ListContacts, contacts as srcContacts, ListContactsFunction, contacts } from './components/ListContacts';
// eslint-disable-next-line
import { MathGame } from './components/mathGameComponent';
// eslint-disable-next-line
import { ExerciseApp, SaySomething } from './components/saySomething'
// eslint-disable-next-line
import { ItemsApp } from './components/add_items_exercise_app';
// eslint-disable-next-line
import { VideoGame } from './components/exercise1-all-together/main';
// eslint-disable-next-line
import { ChatApp } from './components/exercise2-all-together/main';

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
  *Example 2: 
    logToConsole = (someText)=>{
      console.log(someText)
    }
    * In example 2, you will pass this function as a prop to component as it is wihtout .bind(this)
    * ==> onLog={this.logToConsole}
 */

class App extends Component {
  state = {
    contacts: srcContacts
  }
  removeContact = (contact) => {
    this.setState((currentState) => ({ contacts: currentState.contacts.filter((c) => c.id !== contact.id) }))
  }
  render() {
    return (
      <div>
        {/* Return contacts list, uncheck state={contacts}, removeContact  */}
        {/* <ListContacts
          contacts={this.state.contacts}
          onDeleteContact={this.removeContact}
        />
        <SaySomething /> */}
        {/* <ListContactsFunction
          contacts={this.state.contacts}
          onDeleteContact={this.removeContact}
        /> */}

        {/* Return string: userName favorite movie is movieName, uncheck import ./components/ListMovies */}
        {/* <div>
          <h2>Favorite Movies</h2>
          <MovieUser profiles={profiles} users={users} movies={movies} />
        </div> */}

        {/* Return all movies and users who like each movie, uncheck import ./components/ListMovies 
        very difficult function and most importan*/}
        {/* <MoviesList profiles={profiles} users={users} movies={movies} /> */}
        {/* <MoviesListFunction profiles={profiles} users={users} movies={movies} /> */}


        {/* Math game Exercise*/}
        {/* <MathGame /> */}


        {/* Add items App Exercise => converting an app into modules */}
        {/* <ItemsApp /> */}

        {/* Exercise 1 -- All Together simulation for videogames players*/}
        {/* <VideoGame /> */}

        {/* Exercise 1 -- All Together simulation for chatting app*/}
        <ChatApp />
      </div>
    )
  }
}
export default App;




// Original create-react-app code
// import logo from './logo.svg';

/*class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>HELLO WORLD!!!</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
*/


