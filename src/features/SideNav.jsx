import home from "../images/home.svg";
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

  return (
    <div className="fixed p-5 top-0 right-0 h-full w-4/5 bg-mlite">
      <div className="flex flex-col h-full gap-3 justify-between">
        {/* Sidebar top section */}
        <div className="flex justify-end">
          <CloseBtn />
        </div>
        {/* Sidebar bottom section */}
        <div>
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
        </div>
      </div>
    </div>
  );
};

export default SideNav;
