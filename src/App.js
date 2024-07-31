import React, { lazy,Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./componenets/Header";
import RestroCards from "./componenets/RestroCards";
import Body from "./componenets/Body";
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
// import About from "./componenets/About";
import Restromenu from "./componenets/RestroMenu";

// const url=("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3248023&lng=78.63317339999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

// console.log(RestroCards)

const About=lazy(()=>{import("./componenets/About")})

const Applayput = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
};
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<Applayput/>,
    // errorElement:<Applayput/>,
    children:[
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/",
        element:<Body/>,
      },
      {
        path:"/menu/:resId",
        element:<Restromenu/>,
      },
    ],
    // errorElement:<Applayput/>
  }

])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
