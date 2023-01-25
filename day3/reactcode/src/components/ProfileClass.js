import React from "react";

class Profile extends React.Component {
  //to use state varible we call constructor
  constructor(props) {
    super(props);
    console.log("constructor called " + this.props.name);

    this.state = {
      userInfo: {
        name: "Dummy",
      },
    };
  }
  async componentDidMount() {
    console.log("Component Did MOunt " + this.props.name);
    const data = await fetch("https://api.github.com/users/ankanmal");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
    console.log("Component Finished API Call");
  }
  componentDidUpdate() {
    console.log("component DID update");
  }
  componentWillUnmount() {
    console.log("Component Will Unmount Called");
  }

  render() {
    console.log("rendered " + this.props.name);
    return (
      <div>
        <h1>Hello from Class Comp</h1>
        <img src={this.state.userInfo?.avatar_url} alt="" />
        <h3>Name:{this.state.userInfo?.name}</h3>
        <h3>Count:{this.state.userInfo?.location}</h3>
      </div>
    );
  }
}
export default Profile;
