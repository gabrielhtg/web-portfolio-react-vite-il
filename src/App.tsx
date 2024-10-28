import "./App.css";
import Footer from "./components/custom/Footer";
import Navbar from "./components/custom/Navbar";
import AboutPage from "./pages/About";
import ContactMe from "./pages/ContactMe";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <Home />
        <AboutPage />
        <Projects />
        <ContactMe />
      </div>
      <Footer />
    </>
  );
}

export default App;
