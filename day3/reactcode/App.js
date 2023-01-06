import React from "react";
import ReactDOM from "react-dom/client";

const heading = (
  <div>
    <h1>Hello React from script</h1>
    <h2>second hello</h2>
  </div>
);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
