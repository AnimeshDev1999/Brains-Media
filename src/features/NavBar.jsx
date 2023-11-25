import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import OpenBtn from "./navState/OpenBtn";

const NavBar = () => {
  return (
    <div className="px-5 py-2 md:py-4 md:px-10 flex justify-between items-center">
      <img src={logo} alt="logo" className="h-12" />
      <ul className="md:flex gap-5 justify-center items-center text-lg hidden">
        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive ? "text-mgld" : "";
            }}
            to="/"
            state="Home"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive ? "text-mgld" : "";
            }}
            to="/about"
            state="About Us"
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive ? "text-mgld" : "";
            }}
            to="/services"
            state="Services"
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive ? "text-mgld" : "";
            }}
            to="/Home"
          >
            Blog
          </NavLink>
        </li>
      </ul>
      <OpenBtn />
    </div>
  );
};

export default NavBar;
