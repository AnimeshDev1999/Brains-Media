import NavBar from "../features/NavBar";
import Hero from "../features/Hero";
import Services from "../features/Services";
import Testimonial from "../features/Testimonial";
import Blog from "../features/Blog";
import Cta from "../features/Cta";
import Footer from "../features/Footer";
import Partners from "../features/Partners";
import Stats from "../features/Stats";

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Partners />
      <Services />
      <Blog />
      <Stats />
      <Testimonial />
      <Cta />
      <Footer />
    </>
  );
};

export default Home;
