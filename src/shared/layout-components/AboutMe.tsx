import StrokeIcon from "../icon-components/StrokeIcon";
import kerimisamir from "../../assets/images/samirikerim.png";

const AboutMe = () => (
  <div
    id="about-me"
    className="grid grid-cols-1 md:grid-cols-3 md:gap-12 my-12 w-full"
  >
    <div className="col-span-full md:col-span-1 text-left">
      <h4 className="text-xl font-bold text-main-brand flex items-center mb-6">
        <StrokeIcon />
        About Me
      </h4>
      <h2 className="text-4xl font-bold text-white mb-12">
        Which kind of developer ?
      </h2>
      <p className="mb-6">
        I'm a Senior Software Developer with many years of experience in
        building scalable web applications. I specialize in full-stack
        development with a focus on JavaScript/TypeScript ecosystems, including
        React, React Native, Angular, Node.js, Web3 and modern cloud
        technologies.
      </p>
      <p className="mb-6">
        I'm passionate about creating efficient, maintainable code and sharing
        knowledge with the developer community through open-source contributions
        and technical writing.
      </p>
    </div>
    <div className="col-span-full md:col-span-2">
      <img
        className="sm:ml-auto mt-6 sm:mt-24 sm:max-w-md"
        src={kerimisamir}
        alt="kerim i samir"
      />
    </div>
    <div className="col-span-full md:col-span-2 my-12">
      <div className="video-container">
        <iframe
          src="https://www.youtube.com/embed/N8jMzuNdSew"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
    <div className="col-span-3 sm:col-span-1 text-left">
      <h4 className="text-xl font-bold text-main-brand flex items-center mb-6">
        <StrokeIcon />
        Code
      </h4>
      <h2 className="text-4xl font-bold text-white mb-12">Watch me code</h2>
      <p>
        Speed coding classic brick breaker game on codepen using HTML Canvas and
        vanila Javascript followed by some cool music in the background.
      </p>
    </div>
  </div>
);

export default AboutMe;
