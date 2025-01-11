import { Vortex } from "@/components/ui/vortex";
import StrokeIcon from "../icon-components/StrokeIcon";
import { Link } from "react-scroll";
import { HeroScene } from "@/components/ui/hero-scene";

import DownloadIcon from "../icon-components/DownloadIcon";
import cv from "../../assets/documents/Samir_Kahvedzic_CV.pdf";

export const Intro = () => {
  return (
    <div id="home" className="rounded-md h-[50rem]">
      <Vortex
        backgroundColor="transparent"
        baseHue={120}
        className="flex flex-col md:flex-row justify-between items-center py-4 h-full max-w-screen"
      >
        <div className="flex flex-col text-left blurred-bg">
          <h3 className="text-xl font-medium text-main-brand flex items-center mb-2 md:mb-6">
            <StrokeIcon />
            Hello
          </h3>
          <h1 className="text-5xl sm:text-8xl font-bold text-white">
            I&rsquo;M SAMIR <br /> KAHVEDZIC
          </h1>
          <h2 className="text-xl md:text-4xl my-2 md:my-6">
            Senior Software Developer
          </h2>
          <div className="mt-4 md:mt-0 flex items-center gap-6">
            <Link
              to="contact-me"
              className="btn mr-4 sm:mr-12 cursor-pointer"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-215}
            >
              Contact Me
            </Link>
            <a
              href={cv}
              className="text-main-accent hover:underline flex"
              download
            >
              <DownloadIcon />
              Download CV
            </a>
          </div>
        </div>
        <div>
          <HeroScene />
        </div>
      </Vortex>
    </div>
  );
};
