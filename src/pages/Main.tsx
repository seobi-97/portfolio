import React from "react";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import TopButton from "../components/TopButton";
function Main() {
  return (
    <>
      <TopButton />
      <Home />
      <About />
      <Skills />
    </>
  );
}

export default Main;
