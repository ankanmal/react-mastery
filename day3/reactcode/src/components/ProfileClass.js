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
  componentDidMount() {
    //here we are calling a set interval and it is not getting stopped after changing the page. To do that we have to remove the setInterval when we leave this page from componentwillunmount
    console.log("Component Did MOunt " + this.props.name);
    this.timer = setInterval(() => {
      console.log("React Op");
    }, 1000);
  }
  componentDidUpdate() {
    console.log("component DID update");
  }
  componentWillUnmount() {
    console.log("Component Will Unmount Called");
    clearInterval(this.timer);
  }

  render() {
    console.log("rendered " + this.props.name);
    return (
      <div>
        <h1>Hello from Class Comp</h1>
      </div>
    );
  }
}
export default Profile;
