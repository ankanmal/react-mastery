import React from "react";
import ReactDOM from "react-dom/client";
import "../App.css";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";
import Body from "./components/Body";

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
