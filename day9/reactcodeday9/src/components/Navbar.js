import { useState } from "react";
import logo from "../../assets/logo1.jpg";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Navbar = () => {
  const [isLogin, setIsLogin] = useState(false);
  const isOnline = useOnline();
  return (
    <div className="main-nav">
      <img src={logo} alt="logo" className="logo" />
      <ul className="ullist">
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
        <li>
          <Link to="/instamart"> Instamart</Link>
        </li>
      </ul>
      <span>{isOnline ? "🟢" : "🔴"}</span>
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
