import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import logo from "./assets/logo1.jpg";

//creating a food delivery service name food kingdom

// initial structure of the app
/**
 * Navbar
 *      -logo (in the left)
 *      -home, aboutus, cart (in the right)
 * Body
 *    -search bar
 *    -restaurant card
 *                - photo, name, cuisines,
 *                  distance
 * Footer
 *       -copyrights
 *       -Address
 *
 */

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

const Body = () => {
  return (
    <div className="res-body">
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div className="card-res">
      <img
        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bdcd233971b7c81bf77e1fa4471280eb"
        alt="restaurantlogo"
        className="res-img"
      />
      <h2>KFC</h2>
      <h3>American,Snacks,Biryani</h3>
      <h4>1.5 km</h4>
    </div>
  );
};

const Footer = () => {
  return <h4>Footer</h4>;
};
const Foodkingdom = () => {
  return (
    <>
      <Navbar />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Foodkingdom />);
