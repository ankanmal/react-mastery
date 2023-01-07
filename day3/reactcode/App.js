import React from "react";
import ReactDOM from "react-dom/client";

//creating three nested h1 inside div using jsx but this is Functional Component
//Passing attribute inside jsx because with the use of {} in tag we can pass any valid javascript inside that.
// Now we will create one more component and pass that inside the TitleFunction component.

const name = "Ankan";

const TitleFunction = () => {
  return (
    <div className="title">
      <h1 key="h1">Hi I am, {name} </h1>
      <h2 key="h2">Hola from header 2</h2>
      <h3 key="h3">Hey it is Header 3</h3>

      <Paragraph />
    </div>
  );
};

const Paragraph = () => {
  return (
    <div key="Pdiv">
      <h1 key="ph1">Lorem Ipsum Come under this </h1>
      <p key="Ppara">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic voluptate
        eligendi possimus deleniti eius necessitatibus, iusto recusandae
        laudantium animi quia!
      </p>
    </div>
  );
};

console.log(TitleFunction);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<TitleFunction />);
