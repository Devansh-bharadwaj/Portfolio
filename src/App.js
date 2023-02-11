import Header from "./components/header/Header";
// import Home from "./components/herosection/home/Home";
import Footer from "./components/footer/Footer";
import "./App.css";
import About from "./components/herosection/about/About";
import Resume from "./components/herosection/resume/Resume";
import Portfolio from "./components/herosection/portfolio/Portfolio";
// import Skills from "./components/herosection/resume/Skills";
import Contact from "./components/herosection/contact/Contact";
import React, { Suspense, lazy } from "react";
import Preloader from "./components/preloader/Preloader";

const AsyncHome = lazy(() => import("./components/herosection/home/Home"));
const AsyncSkills = lazy(() =>
  import("./components/herosection/resume/Skills")
);
const AsyncResume = lazy(() => import("./components/herosection/resume/Resume"));
const AsyncPortfolio = lazy(() => import("./components/herosection/portfolio/Portfolio"));
const AsyncAbout = lazy(() => import("./components/herosection/about/About"));
const AsyncContact = lazy(() => import("./components/herosection/contact/Contact"));
const AsyncFooter = lazy(() => import("./components/footer/Footer"));

function App() {
  return (
    <>
      <Suspense fallback={<Preloader />}>
        <div className="wrapper">
          <Header />
          <AsyncHome />
          <AsyncSkills />
          <AsyncResume />
          <AsyncPortfolio />
          <AsyncAbout />
          <AsyncContact />
          <AsyncFooter />
        </div>
      </Suspense>
    </>
  );
}

export default App;
