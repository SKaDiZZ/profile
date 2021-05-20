import profile from "../../assets/images/profile.png";
import StrokeIcon from "../../shared/icon-components/StrokeIcon";

const Home = () => {
  return (
    <div className="flex-col">
      <div className="flex items-center">
        <div className="flex-auto">
          <h3 className="text-2xl font-bold text-main-brand flex items-center mb-6">
            <StrokeIcon />
            Hello
          </h3>
          <h1 className="text-8xl font-bold text-white">
            I'M SAMIR <br /> KAHVEDZIC
          </h1>
          <h2 className="text-4xl my-6">Senior Software Developer</h2>
          <div className="flex gap-12 items-center">
            <a
              className="px-6 py-4 rounded-xl bg-card-bg hover:text-main-accent"
              href="mailto:akirapowered@gmail.com"
            >
              Contact Me
            </a>
            <a href="#" className="text-main-accent hover:underline flex">
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                ></path>
              </svg>{" "}
              Download CV
            </a>
          </div>
        </div>
        <div className="w-1/2">
          <img src={profile} alt="samir" />
        </div>
      </div>
      <div className="flex items-center my-24 gap-12">
        <div className="w-full sm:w-3/4">
          <div className="grid grid-cols-2 grid-rows-3 gap-2">
            <div className="bg-card-bg rounded-xl rounded-tr-none p-4 flex">
              <svg
                className="w-12 h-12 mr-4 text-main-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                ></path>
              </svg>
              <div className="text-white">
                Mobile Development
                <br />
                <span className="text-main-fg">
                  Flutter, React Native, Ionic
                </span>
              </div>
            </div>
            <div className="bg-card-bg rounded-xl rounded-bl-none p-4 flex row-start-2 col-start-2 col-end-2">
              <svg
                className="w-12 h-12 mr-4 text-main-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                ></path>
              </svg>
              <div className="text-white">
                Web Development
                <br />
                <span className="text-main-fg">Angular, React, Vue</span>
              </div>
            </div>
            <div className="bg-card-bg rounded-xl rounded-br-none p-4 flex row-start-3">
              <svg
                className="w-12 h-12 mr-4 text-main-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                ></path>
              </svg>
              <div className="text-white">
                Backend
                <br />
                <span className="text-main-fg">NodeJS, Postgres, MongoDB</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-1/2">
          <h4 className="text-xl font-bold text-main-brand flex items-center mb-6">
            <StrokeIcon />
            What I do?
          </h4>
          <h2 className="text-4xl font-bold text-white mb-12">
            Frontend Tech Lead at WeOwn Market
          </h2>
          <p className="mb-6">
            Currently I'm working full time for{" "}
            <a
              className="text-main-accent hover:underline"
              href="https://weown.com"
              rel="noreferrer"
              target="_blank"
            >
              {" "}
              WeOwn Market
            </a>{" "}
            as frontend tech lead. I lead development of multiple web and mobile
            applications built on top of WeOwn Blockchain.
          </p>
          <p className="mb-6">
            Part time I'm working for{" "}
            <a
              className="text-main-accent hover:underline"
              href="https://findustrial.io"
              rel="noreferrer"
              target="_blank"
            >
              Findustrial AG
            </a>{" "}
            leading frontend development of their fintech platform.
          </p>
          <p className="mb-6">
            In my free time I'm working on my own projects, developing some of
            my ideas into full fledged products. Helping others to learn coding
            by writing tutorials and releasing NPM packages.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
