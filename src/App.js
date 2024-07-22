import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./componenets/Header"
import resData from "./componenets/data"
import RestroCards from "./componenets/RestroCards"
import Body  from "./componenets/Body";



// const url=("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3248023&lng=78.63317339999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");


// console.log(RestroCards)


const Applayput = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayput />);
