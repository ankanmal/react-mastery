import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
import ProfileFunc from "./Profile";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    console.log("Parent Constructor");
    super(props);
  }
  componentDidMount() {
    console.log("Parent Did Mount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About Us</h1>
        <h2>Wlecome to the Food kingdom Website</h2>
        <ProfileClass name="Ankan class" />
      </div>
    );
  }
}

export default About;
