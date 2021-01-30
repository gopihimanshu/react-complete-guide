import React, { Component } from "react";
import "./App.css";
import Radium, { StyleRoot } from "radium";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "1", name: "Max", age: "28" },
      { id: "2", name: "Manu", age: "25" },
      { id: "3", name: "Stephanie", age: "23" },
    ],
    otherState: "some value",
    showPersons: false,
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((person) => {
      return person.id === id;
    });
    const person = { ...this.state.persons[personIndex] };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons,
    });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
    let style = {
      backgroundColor: "green",
      font: "inherit",
      color: "white",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black",
      },
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                changed={(event) => this.nameChangeHandler(event, person.id)}
              ></Person>
            );
          })}
        </div>
      );
      style.backgroundColor = "red";
      style[":hover"] = {
        backgroundColor: "salmon",
        color: "black",
      };
    }

    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi, I am React App</h1>
          <p className={classes.join(" ")}>This is really working!</p>
          <button style={style} onClick={this.togglePersonHandler}>
            Toggle Persons
          </button>
          {persons}
        </div>
      </StyleRoot>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I am React World'));
  }
}

export default Radium(App);
