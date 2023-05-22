import Companies from "./components/Companies";
import Feature from "./components/Feature";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import { features } from "./constants/features";
import Slogan from "./components/Slogan";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="bg-[#ebeaea] font-poppins">
      <NavBar />
      <Hero />
      <Companies />

      {features.map((feature) => (
        <Feature feature={feature} />
      ))}

      <Slogan />
      <Testimonials />

      <Footer />
    </div>
  );
}

export default App;
