import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";

class Contacts extends Component {
  //   constructor() {
  //     super();
  //     this.state = {
  //       contacts: [
  //         {
  //           id: 1,
  //           name: "John Doe",
  //           email: "jdoe@gmail.com",
  //           phone: "555-555-5555"
  //         },
  //         {
  //           id: 2,
  //           name: "Karen Williams",
  //           email: "karen@gmail.com",
  //           phone: "222-222-2222"
  //         },
  //         {
  //           id: 3,
  //           name: "Henry Johnson",
  //           email: "henry@gmail.com",
  //           phone: "111-111-1111"
  //         }
  //       ]
  //     };
  //   }

  // state = {
  //   contacts: [
  //     {
  //       id: 1,
  //       name: "John Doe",
  //       email: "jdoe@gmail.com",
  //       phone: "555-555-5555"
  //     },
  //     {
  //       id: 2,
  //       name: "Karen Williams",
  //       email: "karen@gmail.com",
  //       phone: "222-222-2222"
  //     },
  //     {
  //       id: 3,
  //       name: "Henry Johnson",
  //       email: "henry@gmail.com",
  //       phone: "111-111-1111"
  //     }
  //   ]
  // };

  // deleteContact = id => {
  //   // console.log(id);

  //   const { contacts } = this.state;

  //   const newContacts = contacts.filter(contact => contact.id !== id);

  //   this.setState({
  //     contacts: newContacts
  //   });
  // };

  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <h1 className="display-4 mb-2">
                <span className="text-danger">Contact </span>
                List
              </h1>
              {contacts.map(contact => (
                //   <h1>{contact.name}</h1>

                <Contact
                  // key={contact.id}
                  // name={contact.name}
                  // email={contact.email}
                  // phone={contact.phone}

                  // if it was a bunch of contacts
                  key={contact.id}
                  contact={contact}
                  // deleteClickHandler={this.deleteContact.bind(this, contact.id)}
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );

    // const { contacts } = this.state;
    // return (
    //   <React.Fragment>
    //     {contacts.map(contact => (
    //       //   <h1>{contact.name}</h1>
    //       <Contact
    //         // key={contact.id}
    //         // name={contact.name}
    //         // email={contact.email}
    //         // phone={contact.phone}

    //         // if it was a bunch of contacts
    //         key={contact.id}
    //         contact={contact}
    //         deleteClickHandler={this.deleteContact.bind(this, contact.id)}
    //       />
    //     ))}
    //   </React.Fragment>
    // );
  }
}

export default Contacts;
