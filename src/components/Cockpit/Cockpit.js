import React, { useEffect, useRef, useContext } from "react";
import classes from "./Cockpit.css";
import AuthContext from "../../context/auth-context";

const cockpit = (props) => {
  const toggleBtnRef = useRef(null);

  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    // setTimeout(() => {
    //   alert("Saved data to cloud");
    // }, 1000);
    toggleBtnRef.current.click();
  }, []);

  const authContext = useContext(AuthContext);

  const assignedClasses = [];
  let btnClass = "";
  if (props.showPersons) {
    btnClass = classes.Red;
  }
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }
  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button className={btnClass} onClick={props.clicked} ref={toggleBtnRef}>
        Toggle Persons
      </button>
      {/* <AuthContext.Consumer>
        {(context) => <button onClick={context.login}>Login</button>}
      </AuthContext.Consumer> */}
      {<button onClick={authContext.login}>Login</button>}
    </div>
  );
};

export default cockpit;
