import React from "react";
import ReactDOM from "react-dom/client";

const title = React.createElement("div", { className: "title" }, [
  React.createElement("h1", { key: "h1" }, "Hello from Header 1"),
  React.createElement("h2", { key: "h2" }, "This is header 2"),
  React.createElement("h3", { key: "h3" }, "Hello form header 3"),
]);
console.log(title);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(title);
