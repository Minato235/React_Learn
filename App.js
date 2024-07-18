import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="">
        <img className="logo1"
          src="https://imgs.search.brave.com/efruMfdVp0epiVA2DGxO3pOnOnbX7srDddg4VNnN8U4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bG9nb2pveS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTgv/MDUvMDExMDU5Mzcv/MTZfYmlnNi03Njh4/NTkxLnBuZw"
          alt="random"
        ></img>
      </div>
      
      <div className="navItems">
        <ul className="ul">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const Applayput = () => {
  return (
    <div className="App">
      <Header />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayput />);
