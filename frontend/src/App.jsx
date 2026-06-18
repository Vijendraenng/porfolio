import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import { ThemeProvider } from "./context/ThemeContext";
import ScrollProgress from "./components/ScrollProgress";

function App() {
  return (
    <ThemeProvider>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
      {/* Chatbot — renders floating on every page */}
      <Chatbot />
    </ThemeProvider>
  );
}

export default App;
