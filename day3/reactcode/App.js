import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";

//Creating a Header Component From Scratch using Functional Component with JSX

const Header = () => {
  return (
    <div className="main">
      <img
        src="https://dz8fbjd9gwp2s.cloudfront.net/logos/6389e494e4b0a2e361db7362.png?v=6"
        alt="Logo"
      />
      <input
        type="text"
        name="searchbar"
        id="search"
        placeholder="Write Something"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 30 30"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-users"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header />);
