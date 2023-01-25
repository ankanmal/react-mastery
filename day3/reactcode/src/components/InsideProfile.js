import React from "react";

class InsideProfile extends React.Component {
  constructor(props) {
    console.log("Inside COsntructor mount");
    super(props);
  }
  componentDidMount() {
    console.log("Inside did Mount");
  }

  render() {
    console.log("profile child render");
    return (
      <div>
        <h1>From inside Profile</h1>
      </div>
    );
  }
}
export default InsideProfile;
