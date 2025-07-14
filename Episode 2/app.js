import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement => js object => html element (render)
/* const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React 🚀"
); */

//JSX => React.createElement(compiler or transpile using babble) => js object => html element (render)
//JSX(javaScript syntex) -> not HTML - it's a HTML or XML like structure;
const jsxHeading = <h1 className="classHeading">Namaste React using JSX 🚀</h1>;

//React functional component
const Title = () => (
  <h1 className="classHeading">Namaste React using JSX 🚀</h1>
);

//component composition
const HeadingComponent = () => (
  <div id="container">
    {jsxHeading}
    <Title />
    <h1 className= "heading">Namaste React Functional Component</h1>
  </div>
);

// const heading = React.createElement("h1", {}, "Hello World");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
