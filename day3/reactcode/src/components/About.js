import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <h2>Wlecome to the Food kingdom Website</h2>
      <Outlet />
    </div>
  );
};

export default About;
