import logo from "../../assets/logo1.jpg";
const Navbar = () => {
  return (
    <div className="main-nav">
      <img src={logo} alt="logo" className="logo" />
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

export default Navbar;
