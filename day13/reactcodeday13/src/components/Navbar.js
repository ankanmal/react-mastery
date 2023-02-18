import { useState, useContext } from "react";
import logo from "../../assets/logo1.jpg";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isLogin, setIsLogin] = useState(false);
  const isOnline = useOnline();
  const { user } = useContext(UserContext);
  const cartQty = useSelector((state) => state.cart.length);
  return (
    <div className="flex justify-between mb-2 bg-[rgb(2,0,36)] bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-lg">
      <img
        src={logo}
        alt="logo"
        className="h-14 self-center m-3 rounded-full"
      />
      <ul className="flex ">
        <li className="p-2 m-2">
          <Link to="/"> Home</Link>
        </li>
        <li className="p-2 m-2">
          <Link to="/about"> About Us</Link>
        </li>
        <li className="p-2 m-2">
          <Link to="/contact"> Contact Us</Link>
        </li>
        <li className="p-2 m-2">
          <Link to="/cart"> Cart-{cartQty}</Link>
        </li>
        <li className="p-2 m-2">
          <Link to="/instamart"> Instamart</Link>
        </li>
      </ul>
      <span className="self-center">{isOnline ? "🟢" : "🔴"}</span>
      <span className="text-blue-600 self-center">{user.name}</span>
      {!isLogin ? (
        <button onClick={() => setIsLogin(true)} className="mx-5">
          Log Out
        </button>
      ) : (
        <button onClick={() => setIsLogin(false)} className="mx-5">
          Log In
        </button>
      )}
    </div>
  );
};

export default Navbar;
