import { useState } from "react";
import logo from "../../assets/logo1.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="main-nav">
      <img src={logo} alt="logo" className="logo" />
      <ul>
        <li>
          <Link to="/"> Home</Link>
        </li>
        <li>
          <Link to="/about"> About Us</Link>
        </li>
        <li>
          <Link to="/contact"> Contact Us</Link>
        </li>
        <li>Cart</li>
      </ul>
      {!isLogin ? (
        <button onClick={() => setIsLogin(true)} className="loginBtn">
          Log Out
        </button>
      ) : (
        <button onClick={() => setIsLogin(false)} className="loginBtn">
          Log In
        </button>
      )}
    </div>
  );
};

export default Navbar;
