const head = React.createElement("h1", { id: "heading" }, "HHEl00000");
const root = ReactDOM.createRoot(document.getElementById("root"))

const parent = React.createElement("div", { id: "praent" },
       [React.createElement("h4", { id: "child" }, "child")],
       [React.createElement("h4", { id: "child" }, "child2")]);
root.render(parent)