import Header from "./components/header/Header";
import Home from "./components/herosection/home/Home";
import Footer from "./components/footer/Footer";
import './App.css';
import About from "./components/herosection/about/About";
import Resume from "./components/herosection/resume/Resume";
import Portfolio from "./components/herosection/portfolio/Portfolio";
import Skills from "./components/herosection/resume/Skills";
import Contact from "./components/herosection/contact/Contact";


function App() {
  return (
    <>
    <div className="wrapper">
    <Header />
    <Home />
    <Skills />
    <Resume/>
    <Portfolio />
    <About />
    <Contact />
    <Footer />
    </div>
    </>
  );
}

export default App;
