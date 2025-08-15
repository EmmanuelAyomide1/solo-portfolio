import Navbar from "./components/Navbar";
import Footer from "./sections/Footer";
import Home from "./sections/Home";
import Services from "./sections/Services";

function App() {
  return (
    <div className="relative">
      <div className="relative flex justify-center">
        <Navbar className="px-5 md:px-20" />
      </div>
      <Home />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
