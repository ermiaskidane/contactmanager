import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Contact.css";
import axios from "axios";

import { Consumer } from "../../context";

// class Contact extends Component {
//   render() {
//     return (
//       <div>
//         <h4>John Doe</h4>
//         <ul>
//           <li>Email: jdoe@gmaial.com</li>
//           <li>Phone: 555-555-5555</li>
//         </ul>
//       </div>
//     );
//   }
// }

class Contact extends Component {
  // static propTypes = {
  //   name: PropTypes.string.isRequired,
  //   email: PropTypes.string.isRequired,
  //   phone: PropTypes.string.isRequired
  // };

  // state = {};

  state = {
    showContactInfo: false
  };

  // this is for onclick event
  // onShowClick = (id, e) => {
  //   console.log(id);
  // };

  // onShowClick = e => {
  //   // we could put this inside the onClick event
  //   this.setState({ showContactInfo: !this.state.showContactInfo });
  // };

  // ################## onDelete click  #####

  // onDeleteClick = (id, dispatch) => {
  //   // console.log("clicked");
  //   // this.props.deleteClickHandler();
  //   // dispatch({ type: "DELETE_CONTACT", payload: id });
  //   axios
  //     .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
  //     .then(res => dispatch({ type: "DELETE_CONTACT", payload: id }));
  // };

  onDeleteClick = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({ type: "DELETE_CONTACT", payload: id });
    } catch (e) {
      dispatch({ type: "DELETE_CONTACT", payload: id });
    }
  };
  render() {
    // we could destructuring
    // const { name, email, phone } = this.props;
    // to shorten the structure
    const { contact } = this.props;

    const { showContactInfo } = this.state;

    // or   const { name, email, phone } = this.props.contact; //then get rid of the contact prefix
    // of name , emial and phone
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {contact.name}
                <i
                  onClick={() =>
                    this.setState({
                      showContactInfo: !this.state.showContactInfo
                    })
                  }
                  className="fas fa-sort-down"
                  style={{ cursor: "pointer" }}
                />
                <i
                  className="fas fa-times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                  onClick={this.onDeleteClick.bind(this, contact.id, dispatch)}
                />
                <Link to={`contact/edit/${contact.id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      cursor: "pointer",
                      float: "right",
                      color: "black",
                      marginRight: "1rem"
                    }}
                  />
                </Link>
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {contact.email}</li>
                  <li className="list-group-item">Phone: {contact.phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );

    // return (
    //   <div className="card card-body mb-3">
    //     <h4>
    //       {contact.name}
    //       {/* <i
    //         onClick={() => console.log("hello")}
    //         className="fas fa-sort-down"
    //       /> */}

    //       {/* <i
    //         onClick={this.onShowClick.bind(this, contact.phone)}
    //         className="fas fa-sort-down"
    //       /> */}

    //       {/* <i onClick={this.onShowClick} className="fas fa-sort-down" /> */}

    //       <i
    //         onClick={() =>
    //           this.setState({ showContactInfo: !this.state.showContactInfo })
    //         }
    //         className="fas fa-sort-down"
    //         style={{ cursor: "pointer" }}
    //       />
    //       <i
    //         className="fas fa-times"
    //         style={{ cursor: "pointer", float: "right", color: "red" }}
    //         onClick={this.onDeleteClick}
    //       />
    //     </h4>
    //     {showContactInfo ? (
    //       <ul className="list-group">
    //         <li className="list-group-item">Email: {contact.email}</li>
    //         <li className="list-group-item">Phone: {contact.phone}</li>
    //       </ul>
    //     ) : null}
    //   </div>
    // );
  }
}

Contact.defaultProps = {
  name: "ermias"
};

// Contact.propTypes = {
//   name: PropTypes.string.isRequired,
//   email: PropTypes.string.isRequired,
//   phone: PropTypes.string.isRequired
// };

Contact.propTypes = {
  contact: PropTypes.object.isRequired
  // deleteClickHandler: PropTypes.func.isRequired
};

export default Contact;
