import Navbar from "./components/Navbar";
import About from "./sections/about/About";
import WorkExp from "./sections/experience/WorkExp";
import Footer from "./sections/footer/Footer";
import Hero from "./sections/hero/Hero";
import Portfolio from "./sections/portfolio/Portfolio";
import Services from "./sections/services/Services";

function App() {
  return (
    <div className="relative">
      <div className="relative flex h-15 justify-center">
        <Navbar className="h-15 bg-white px-5 md:px-20" />
      </div>
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <WorkExp />
      <Footer />
    </div>
  );
}

export default App;
