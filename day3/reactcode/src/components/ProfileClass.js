import React from "react";
import InsideProfile from "./InsideProfile";

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
        <InsideProfile />
      </div>
    );
  }
}
export default Profile;

/*
        parent constructor
        parent render
            profile cosntructor
            profile render
            inside constructor
            inside render
            inside didMount
            profile did MOunt
        parent did mount

*/
