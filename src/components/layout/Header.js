import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// const Header = () => {
//   return (
//     <div>
//       <h1>Contact Manager</h1>
//     </div>
//   );
// };

const Header = props => {
  const { ermias } = props;
  return (
    // <div>
    //   {/* <h1 style={{ color: "red", fontSize: "5rem" }}>{ermias}</h1> */}
    //   <h1 style={headingStyle}>{ermias}</h1>
    // </div>
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-o">
      <div className="container">
        <a href="/" className="navbar-brand">
          {ermias}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home" /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact/add" className="nav-link">
                <i className="fas fa-plus" /> Add
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <i className="fas fa-question" /> About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  ermias: "My App"
};

Header.propTypes = {
  ermias: PropTypes.string.isRequired
};

// const headingStyle = {
//   color: "yellow",
//   fontSize: "5rem"
// };
export default Header;
