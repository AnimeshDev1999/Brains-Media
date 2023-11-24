import { Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Home from "./pages/Home";
import SideNav from "./features/SideNav";
import Overlay from "./features/Overlay";
import Footer from "./features/Footer";
import NavBar from "./features/NavBar";

function App() {
  const val = useSelector((state) => state.toggler.value);

  return (
    <div className="overflow-x-hidden">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
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
