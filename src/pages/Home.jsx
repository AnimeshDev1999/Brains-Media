import Hero from "../features/Hero";
import Services from "../features/Services";
import Testimonial from "../features/Testimonial";
import Blog from "../features/Blog";
import Cta from "../features/Cta";
import Partners from "../features/Partners";
import Stats from "../features/Stats";

const Home = () => {
  return (
    <div>
      <Hero />
      <Partners />
      <Services />
      <Blog />
      <Stats />
      <Testimonial />
      <Cta />
    </div>
  );
};

export default Home;
