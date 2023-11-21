import logo from "../images/logo.png";
import menu from "../images/menu.svg";

const NavBar = () => {
  return (
    <div className="p-5 flex justify-between items-center">
      <img src={logo} alt="logo" className="h-12" />
      <img src={menu} alt="menu" className="h-10" />
    </div>
  );
};

export default NavBar;
