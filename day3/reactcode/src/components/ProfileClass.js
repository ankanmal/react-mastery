import React from "react";

class Profile extends React.Component {
  //to use state varible we call constructor
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 0,
    };
  }

  render() {
    return (
      <div>
        <h1>Hello from Class Comp</h1>
        <h3>Name:{this.props.name}</h3>
        <h3>Count:{this.state.count}</h3>
      </div>
    );
  }
}
export default Profile;
