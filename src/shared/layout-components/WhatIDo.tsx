import MobileIcon from "../icon-components/MobileIcon";
import TemplateIcon from "../icon-components/TemplateIcon";
import FollowMe from "./FollowMe";

import samke from "../../assets/images/samke.png";
import DatabaseIcon from "../icon-components/DatabaseIcon";

export const WhatIDo = () => {
  return (
    <div
      id="what-i-do"
      className="relative grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-y-12 md:gap-x-12 py-12 w-full"
    >
      <div className="col-span-2">
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-3 gap-2">
          <div className="bg-card-bg rounded-xl rounded-tr-none p-4 flex justify-start">
            <MobileIcon />
            <div className="text-white text-left">
              Mobile Development
              <br />
              <span className="text-main-fg">Flutter, React Native, Ionic</span>
            </div>
          </div>
          <div className="bg-card-bg rounded-xl rounded-bl-none p-4 flex row-start-2 md:col-start-2 col-end-2">
            <TemplateIcon />
            <div className="text-white text-left">
              Web Development
              <br />
              <span className="text-main-fg">Angular, React, Vue</span>
            </div>
          </div>
          <div className="bg-card-bg rounded-xl rounded-br-none p-4 flex gap-6 row-start-3 justify-start">
            <DatabaseIcon />
            <div className="text-white text-left">
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
        <h4 className="card-subtitle text-base text-left mb-2">What I do?</h4>
        <h2 className="text-4xl font-bold text-white mb-12">
          Frontend Tech Lead at OVRLAY Labs
        </h2>
        <p className="mb-6">
          Currently I&rsquo;m working full time for{" "}
          <a
            className="text-main-accent hover:underline"
            href="https://ovrlay.world"
            rel="noreferrer"
            target="_blank"
          >
            OVRLAY Labs
          </a>{" "}
          as a frontend tech lead. I lead development of multiple web and mobile
          applications.
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
          In my free time I&rsquo;m working on my own projects, developing some
          of my ideas into full fledged products. Helping young people to learn
          coding by writing tutorials and promoting importance of coding in my
          comunity.
        </p>
        <p className="mb-12">
          I&rsquo;m helping others in their work by releasing useful NPM
          packages and libraries.
        </p>
        <FollowMe />
      </div>
    </div>
  );
};
