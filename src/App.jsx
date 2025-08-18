import Navbar from "./components/Navbar";
import Footer from "./sections/Footer";
import Hero from "./sections/hero/Hero";
import Services from "./sections/services/Services";

function App() {
  return (
    <div className="relative">
      <div className="relative flex justify-center">
        <Navbar className="px-5 md:px-20" />
      </div>
      <Hero />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
