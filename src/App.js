import Header from "./components/header/Header";
import "./App.css";
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
const AsyncExperience = lazy(() => import("./components/herosection/experience/Experience"));

function App() {
  return (
    <>
      <Suspense fallback={<Preloader />}>
        <div className="wrapper">
          <Header />
          <AsyncHome />
          <AsyncSkills />
          <AsyncResume />
          <AsyncExperience />
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
