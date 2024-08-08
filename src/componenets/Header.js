import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../util/useOnline";
const Header = () => {
  const [btnName, setBtnname] = useState("Login");
  const Status = useOnlineStatus();
  return (
    <div className="flex justify-between bg-slate-100">
      <div className="logo-container">
        <img
          className="w-40"
          src="https://imgs.search.brave.com/ZCv32RF4-yQqEHO--jzYYXV1hKpUG_g9NNO8rJO3qc0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2U0LzYz/Lzk4L2U0NjM5ODk5/Y2E2YjI0ZjdjMjAy/NzM0MDU1ZjI1YWY0/LmpwZw"
          alt="random"
        ></img>
      </div>

      <div className="flex items-center ">
        <ul className="flex p-4 m-4 space-x-8 ">
          <li className="">Status:{Status ? "✅" : "❌"}</li>
          <li className="nav-item">
          <Link to="home">Home</Link>
            </li>
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
