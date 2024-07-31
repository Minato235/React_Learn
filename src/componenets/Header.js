import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../util/useOnline";
const Header = () => {
  const [btnName, setBtnname] = useState("Login");
  const Status = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://cdn.worldvectorlogo.com/logos/swiggy-1.svg"
          alt="random"
        ></img>
      </div>

      <div className="nav-items">
        <ul className="nav-list">
          <li className="nav-item">Status:{Status ? "✅" : "❌"}</li>
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
