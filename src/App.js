import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
// import Contact from "./components/Contact";
import Contacts from "./components/contacts/Contacts";
import Header from "./components/layout/Header";
import About from "./components/pages/About";
import AddContact from "./components/contacts/AddContact";
import EditContact from "./components/contacts/EditContact";
import NotFound from "./components/pages/NotFound";
import Test from "./components/test/Test";

import { Provider } from "./context";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    // this is how we would code with javascript
    // return React.createElement(
    //   "div",
    //   { className: "App" },
    //   React.createElement("h1", null, "The App components again")
    // );

    // this is how we simplify th JS with JSX
    // const name = "Larry";
    // const showHello = true;
    const showMath = true;
    const num1 = 40;
    const num2 = 23;

    let math;
    if (showMath) {
      math = (
        <h4>
          {num1} + {num2} = {num1 + num2}
        </h4>
      );
    } else {
      math = null;
    }

    return (
      <Provider>
        <Router>
          <div className="App">
            {/* <h1>The components</h1>
        {showHello ? <h4>hello {name.toUpperCase()}</h4> : null} */}
            {/* <h4>hello {name.toUpperCase()}</h4> */}
            {/* <h4>1+1 = {1 + 1}</h4> */}
            {/* <label htmlFor="name">Name</label> */}
            {/* <input type="text" /> */}
            <Header ermias="Contact manager1" />

            <div className="container">
              {/* <Contact
                  name="John Doe"
                  email="jdoe@gmail.com"
                  phone="555-555-5575"
                />
                <Contact
                  name="karen smith"
                  email="karen@gmail.com"
                  phone="333-333-3333"
                /> */}

              {/* <AddContact />
              <Contacts /> */}

              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route exact path="/about" component={About} />
                {/* <Route exact path="/about/:id" component={About} /> */}
                <Route exact path="/test" component={Test} />
                <Route component={NotFound} />
              </Switch>

              {math}
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
