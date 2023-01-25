import React from "react";

class Profile extends React.Component {
  //to use state varible we call constructor
  constructor(props) {
    console.log("constructor called");
    super(props);
    this.state = {
      count: 0,
      count2: 0,
    };
  }
  componentDidMount() {
    console.log("Component Did MOunt");
  }

  render() {
    console.log("rendered");
    return (
      <div>
        <h1>Hello from Class Comp</h1>
        <h3>Name:{this.props.name}</h3>
        <h3>Count:{this.state.count}</h3>
        <h3>Count2:{this.state.count2}</h3>
        <button
          onClick={() => {
            this.setState({
              count: 1,
              count2: 2,
            });
          }}
        >
          Set Count
        </button>
      </div>
    );
  }
}
export default Profile;
