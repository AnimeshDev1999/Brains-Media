import home from "../images/home.svg";
import { useLocation } from "react-router-dom";
import people from "../images/people.svg";
import bag from "../images/bag.svg";
import search from "../images/search.svg";
import book from "../images/book.svg";
import SideBtn from "./SideBtn";
import CloseBtn from "./navState/CloseBtn";

const SideNav = () => {
  const data = [
    { nam: "Home", img: home, path: "/" },
    { nam: "About", img: people, path: "/about" },
    { nam: "Services", img: bag, path: "/services" },
    { nam: "Blog", img: book, path: "/about" },
  ];

  const location = useLocation();

  return (
    <div className="fixed p-5 top-0 right-0 h-full w-4/5 bg-mlite">
      <div className="flex flex-col h-full gap-3 justify-between">
        {/* Sidebar top section */}
        <div className="flex justify-end">
          <CloseBtn />
        </div>
        {/* Sidebar bottom section */}
        <div>
          <div className="flex items-center gap-2 mb-3 bg-white rounded-md px-5 py-2">
            <p>Page</p> <p>|</p>{" "}
            <p className="text-mgld text-xl">
              {location.state ? location.state : "Home"}
            </p>{" "}
          </div>
          <div className="flex rounded-md overflow-hidden mb-3">
            <input
              type="text"
              className="w-full h-12 px-5"
              placeholder="Search"
            />
            <button className="bg-white">
              <img src={search} alt="search" className="h-12" />
            </button>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {data.map((item) => (
              <SideBtn key={item.nam} obj={item} />
            ))}
          </div>
          <p className="mt-5 pt-5 border-t-[2px] border-t-mgld">
            ©Brains Media Solutions Pvt. Ltd. All Rights Reserved{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
