import React from "react";
import ReactDOM from "react-dom/client";

//react element
const JsxHeading = () => <p id="heading">jsx Is ! html</p>;
const root = ReactDOM.createRoot(document.getElementById("root"));

//func componenet
const FunctionComponeet = () => (
    
  <h3>
    <JsxHeading />
    {JsxHeading()}
    Functional Component
    s are Basic Js Functions
  </h3>
);
root.render(<FunctionComponeet />);

console.log(FunctionComponeet);
