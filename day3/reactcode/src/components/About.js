import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
import ProfileFunc from "./Profile";

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <h2>Wlecome to the Food kingdom Website</h2>
      <ProfileFunc />
      <ProfileClass />
    </div>
  );
};

export default About;
