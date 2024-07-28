import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [btnName, setBtnname] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://imgs.search.brave.com/efruMfdVp0epiVA2DGxO3pOnOnbX7srDddg4VNnN8U4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bG9nb2pveS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTgv/MDUvMDExMDU5Mzcv/MTZfYmlnNi03Njh4/NTkxLnBuZw"
          alt="random"
        ></img>
      </div>

      <div className="nav-items">
        <ul className="nav-list">
          <li className="nav-item">Home</li>
          <li className="nav-item">
            <Link to="about">About</Link>
          </li>
          <li className="nav-item">Contact</li>
          <li className="nav-item">Cart</li>
          <button
            className="btn"
            onClick={() => {
              btnName === "Login" ? setBtnname("LogOut") : setBtnname("LogIn");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
