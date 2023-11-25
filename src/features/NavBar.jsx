import logo from "../images/logo.png";
import menu from "../images/menu.svg";
import OpenBtn from "./navState/OpenBtn";

const NavBar = () => {
  return (
    <div className="px-5 py-2 flex justify-between items-center">
      <img src={logo} alt="logo" className="h-12" />
      <OpenBtn />
    </div>
  );
};

export default NavBar;
