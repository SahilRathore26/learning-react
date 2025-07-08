const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Heading h1 tag"),
    React.createElement("h2", {}, "Heading h2 tag"),
  ])
);
console.log(parent);

// const heading = React.createElement("h1", {}, "Hello World");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
