import ProfileClass from "./ProfileClass";

import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    console.log("Parent Constructor");
    super(props);
  }
  componentDidMount() {
    //Best Place for Api Call
    console.log("Parent Did Mount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About Us</h1>
        <h2>Wlecome to the Food kingdom Website</h2>
        <UserContext.Consumer>
          {({ user }) => (
            <h1
              className="text-2xl
          p-2 m-2 font-bold"
            >
              {user.name}-{user.email}
            </h1>
          )}
        </UserContext.Consumer>
        <ProfileClass name="First class" />
      </div>
    );
  }
}

export default About;
