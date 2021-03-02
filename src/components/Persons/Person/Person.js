import React, { Component } from "react";
import PropTypes from "prop-types";

import classes from "./Person.css";
import Aux from "../../../hoc/Auxiliary";
import WithClass from "../../../hoc/WithClass";
import AuthContext from "../../../context/auth-context";

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
    console.log("Context", this.context.authenticated);
  }
  render() {
    console.log("[Person.js] rendering...");
    return (
      <WithClass classes={classes.Person}>
        {/* <AuthContext.Consumer>
          {(context) =>
            context.authenticated ? (
              <p>Authenticated!!</p>
            ) : (
              <p>Please Login !!</p>
            )
          }
        </AuthContext.Consumer> */}

        {this.context.authenticated ? (
          <p>Authenticated!!</p>
        ) : (
          <p>Please Login...</p>
        )}

        <p onClick={this.props.click}>
          I am {this.props.name} and I am {this.props.age} years old.
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          // ref={(inputEl) => { this.inputElement = inputEl;}}
          ref={this.inputElementRef}
          onChange={this.props.changed}
          value={this.props.name}
        ></input>
      </WithClass>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
};

export default Person;
