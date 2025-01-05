import { WatchMeCode } from "@/shared/layout-components/WatchMeCode";

import AboutMe from "../../shared/layout-components/AboutMe";
import ContactMe from "../../shared/layout-components/ContactMe";
import Footer from "../../shared/layout-components/Footer";
import Projects from "../../shared/layout-components/Projects";
import Timeline from "../../shared/layout-components/Timeline";

import { Intro } from "@/shared/layout-components/Intro";
import { WhatIDo } from "@/shared/layout-components/WhatIDo";

const Home = () => {
  return (
    <div className="relative">
      <Intro />
      <AboutMe />
      <WhatIDo />
      <WatchMeCode />
      <Projects />
      <Timeline />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default Home;
