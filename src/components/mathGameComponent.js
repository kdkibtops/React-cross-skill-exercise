import React, { Component } from 'react';
import logo from './mathGame/logo.svg';
import './mathGame/App.css';
// eslint-disable-next-line
import PropsTypes from 'prop-types';

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


export class MathGame extends Component {
  constructor(props) {
    super(props);
    const values = this.createValues()
    const value1 = values[0]
    const value2 = values[1]
    const value3 = values[2]
    const proposedAnswer = values[3]
    this.state = {
      gameValues: {
        value1: value1,
        value2: value2,
        value3: value3,
        proposedAnswer: proposedAnswer
      },
      score: {
        numQuestions: 0,
        numCorrect: 0
      },
      componentName: 'MathGame'
    }
  }

  createValues() {
    const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);
    const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
    return [value1, value2, value3, proposedAnswer]
  }

  onCheckAnswer = (val1, val2, val3, proposedAnswer, userInput) => {
    let Answer;
    if ((val1 + val2 + val3 === proposedAnswer && userInput === true) ||
      (val1 + val2 + val3 !== proposedAnswer && userInput === false)) {
      Answer = true;
    }
    if ((val1 + val2 + val3 !== proposedAnswer && userInput === true) ||
      (val1 + val2 + val3 === proposedAnswer && userInput === false)) {
      Answer = false
    }
    if (Answer) {
      this.setState((currentState) => {
        const values = this.createValues();
        return {
          gameValues: {
            value1: values[0],
            value2: values[1],
            value3: values[2],
            proposedAnswer: values[3]
          },
          score: {
            numQuestions: currentState.score.numQuestions + 1,
            numCorrect: currentState.score.numCorrect + 1
          }
        }
      })
    } else if (!Answer) {
      this.setState((currentState) => {
        const values = this.createValues();
        return {
          gameValues: {
            value1: values[0],
            value2: values[1],
            value3: values[2],
            proposedAnswer: values[3]
          },
          score: {
            numQuestions: currentState.score.numQuestions + 1,
            numCorrect: currentState.score.numCorrect
          }
        }
      })
    }
  }
  render() {
    return (
      <div className="App">
        <AppHeader />
        <Game
          gameValues={{
            value1: this.state.gameValues.value1,
            value2: this.state.gameValues.value2,
            value3: this.state.gameValues.value3,
            proposedAnswer: this.state.gameValues.proposedAnswer
          }}
          score={{
            numCorrect: this.state.score.numCorrect,
            numQuestions: this.state.score.numQuestions
          }}
          onCheckAnswer={this.onCheckAnswer}
        />
      </div>
    );
  }
}

class AppHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      componentName: 'AppHeader'
    }
  }
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
    )
  }

}

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      componentName: 'Game',
      values: [
        this.props.gameValues.value1,
        this.props.gameValues.value2,
        this.props.gameValues.value3,
        this.props.gameValues.proposedAnswer,
      ],
      userInput: null
    }
  }
  onPressedButton = (user_Input) => {
    this.setState(() => ({
      values: [
        this.props.gameValues.value1,
        this.props.gameValues.value2,
        this.props.gameValues.value3,
        this.props.gameValues.proposedAnswer,
      ],
      userInput: user_Input
    }))
    this.props.onCheckAnswer(
      this.props.gameValues.value1,
      this.props.gameValues.value2,
      this.props.gameValues.value3,
      this.props.gameValues.proposedAnswer,
      user_Input
    )
  }
  render() {
    return (
      <div className="game">

        <h2>Mental Math</h2>

        <Question
          values={[
            this.props.gameValues.value1,
            this.props.gameValues.value2,
            this.props.gameValues.value3,
            this.props.gameValues.proposedAnswer
          ]} />

        <Button
          onPressedButton={this.onPressedButton}
          content='True' value={true}
        />

        <Button
          onPressedButton={this.onPressedButton}
          content='False' value={false}
        />

        <Score
          numCorrect={this.props.score.numCorrect}
          numQuestions={this.props.score.numQuestions}
        />
      </div>
    )
  }
}

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      componentName: 'Question'
    }
  }
  render() {
    return (
      <div className="equation">
        <p className="text">{
          `${this.props.values[0]} + ${this.props.values[1]} + ${this.props.values[2]} = ${this.props.values[3]}`
        }
        </p>
      </div>
    )
  }
}

class Score extends Component {
  constructor(props) {
    super(props);
    this.state = {
      componentName: 'Game'
    }
  }
  render() {
    return (
      <p className="text">
        Your Score: {this.props.numCorrect}/{this.props.numQuestions}
      </p>
    )
  }
}

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      componentName: 'Button'
    }
  }
  render() {
    return (
      <button
        onClick={
          () => {
            this.props.onPressedButton(this.props.value)
          }
        }
      >
        {this.props.content}</button>
    )
  }
}