import { Link } from "react-scroll";
import profile from "../../assets/images/profile.png";
import samke from "../../assets/images/samke.png";
import cv from "../../assets/documents/Samir_Kahvedzic_CV.pdf";
import DatabaseIcon from "../../shared/icon-components/DatabaseIcon";
import DownloadIcon from "../../shared/icon-components/DownloadIcon";
import MobileIcon from "../../shared/icon-components/MobileIcon";
import StrokeIcon from "../../shared/icon-components/StrokeIcon";
import TemplateIcon from "../../shared/icon-components/TemplateIcon";
import AboutMe from "../../shared/layout-components/AboutMe";
import ContactMe from "../../shared/layout-components/ContactMe";
import FollowMe from "../../shared/layout-components/FollowMe";
import Footer from "../../shared/layout-components/Footer";
import Projects from "../../shared/layout-components/Projects";
import Timeline from "../../shared/layout-components/Timeline";

const Home = () => {
  return (
    <div>
      <div id="home" className="sm:flex items-center mt-12 md:mt-0">
        <div className="w-full sm:w-1/2">
          <h3 className="text-2xl font-bold text-main-brand flex items-center mb-6">
            <StrokeIcon />
            Hello
          </h3>
          <h1 className="text-5xl sm:text-8xl font-bold text-white">
            I&rsquo;M SAMIR <br /> KAHVEDZIC
          </h1>
          <h2 className="text-4xl my-6">Senior Software Developer</h2>
          <div className="mt-12 md:mt-0 flex flex-col md:flex-row space-y-12 md:space-y-0 items-center">
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
        <div className="w-full sm:w-1/2">
          <img src={profile} alt="samir" />
        </div>
      </div>
      <div
        id="what-i-do"
        className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-y-12 md:gap-x-12 my-12 w-full"
      >
        <div className="col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-3 gap-2">
            <div className="bg-card-bg rounded-xl rounded-tr-none p-4 flex">
              <MobileIcon />
              <div className="text-white">
                Mobile Development
                <br />
                <span className="text-main-fg">
                  Flutter, React Native, Ionic
                </span>
              </div>
            </div>
            <div className="bg-card-bg rounded-xl rounded-bl-none p-4 flex row-start-2 md:col-start-2 col-end-2">
              <TemplateIcon />
              <div className="text-white">
                Web Development
                <br />
                <span className="text-main-fg">Angular, React, Vue</span>
              </div>
            </div>
            <div className="bg-card-bg rounded-xl rounded-br-none p-4 flex row-start-3">
              <DatabaseIcon />
              <div className="text-white">
                Backend
                <br />
                <span className="text-main-fg">NodeJS, Postgres, MongoDB</span>
              </div>
            </div>
          </div>
          <div className="mt-16">
            <img src={samke} alt="samir" />
          </div>
        </div>

        <div className="col-span-full md:col-span-1 text-left">
          <h4 className="text-xl font-bold text-main-brand flex items-center mb-6">
            <StrokeIcon />
            What I do?
          </h4>
          <h2 className="text-4xl font-bold text-white mb-12">
            Frontend Tech Lead at WeOwn Market
          </h2>
          <p className="mb-6">
            Currently I&rsquo;m working full time for{" "}
            <a
              className="text-main-accent hover:underline"
              href="https://weown.com"
              rel="noreferrer"
              target="_blank"
            >
              WeOwn Market
            </a>{" "}
            as frontend tech lead. I lead development of multiple web and mobile
            applications built on top of WeOwn Blockchain.
          </p>
          <p className="mb-6">
            <a
              className="text-main-accent hover:underline"
              href="https://roarington.com"
              rel="noreferrer"
              target="_blank"
            >
              Roarington Metaland
            </a>{" "}
            project I&rsquo;m currently working on is implementing technologies
            like Pixel Streaming (ArcWare - Unreal Engine), Video Streaming,VR,
            SSR, AI and more. It is really amazing time to be a developer.
          </p>
          <p className="mb-6">
            In my free time I&rsquo;m working on my own projects, developing
            some of my ideas into full fledged products. Helping young people to
            learn coding by writing tutorials and promoting importance of coding
            in my comunity.
          </p>
          <p className="mb-6">
            I&rsquo;m helping others in their work by releasing useful NPM
            packages and libraries.
          </p>
          <FollowMe />
        </div>
      </div>
      <AboutMe />
      <Projects />
      <Timeline />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default Home;
