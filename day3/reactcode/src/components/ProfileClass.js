import React from "react";

class Profile extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello from Class Comp</h1>
        <h3>Name:{this.props.name}</h3>
      </div>
    );
  }
}
export default Profile;
