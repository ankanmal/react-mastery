import React from "react";
import ReactDOM from "react-dom/client";

//creating three nested h1 inside div using jsx
const titleJSX = (
  <div className="title">
    <h1 key="h1">Hi from header 1</h1>
    <h2 key="h2">Hola from header 2</h2>
    <h3 key="h3">Hey it is Header 3</h3>
  </div>
);
console.log(titleJSX);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(titleJSX);
