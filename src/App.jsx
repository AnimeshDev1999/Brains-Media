import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./pages/Home";
import SideNav from "./features/SideNav";
import Overlay from "./features/Overlay";
import Footer from "./features/Footer";
import NavBar from "./features/NavBar";
import AboutPg from "./pages/AboutPg";
import ServicesPg from "./pages/ServicesPg";

function App() {
  const val = useSelector((state) => state.toggler.value);

  return (
    <div className="overflow-x-hidden">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPg />} />
        <Route path="/services" element={<ServicesPg />} />
        <Route path="*" element={<Home />} />
      </Routes>
      {val ? (
        <>
          <Overlay />
          <SideNav />
        </>
      ) : (
        ""
      )}
      <Footer />
    </div>
  );
}

export default App;
