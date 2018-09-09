import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    body: ""
  };
  componentDidMount() {
    // console.log("componentDidMount...");
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => response.json())
      // .then(data => console.log(data));
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body
        })
      );
  }

  // componentWillMount() {
  //   console.log("componentWillMount...");
  // }

  // componentDidUpdate() {
  //   console.log("componentDidUpdate...");
  // }
  // componentWillUpdate() {
  //   console.log("componentwillUpdate...");
  // }

  // componentWillReceiveProps(nextProps, nextState) {
  //   console.log("componentWillRecieveProps...");
  // }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   return null;
  // }
  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log("getSnapshotBeforeUpdate...");
  // }
  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>
          <span className="text-danger">test</span> component
        </h1>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}
export default Test;
