import StrokeIcon from "../icon-components/StrokeIcon";
import kerimisamir from "../../assets/images/samirikerim.png";

const AboutMe = () => (
  <div
    id="about-me"
    className="grid grid-cols-1 sm:grid-cols-3 gap-12 my-12 w-full"
  >
    <div className="col-span-2 sm:col-span-1">
      <h4 className="text-xl font-bold text-main-brand flex items-center mb-6">
        <StrokeIcon />
        About Me
      </h4>
      <h2 className="text-4xl font-bold text-white mb-12">
        How I grew as developer ?
      </h2>
      <p className="mb-6">
        I dream in code since I had my first PC. I was always interested in how
        every app is working and how it is made. I love to explore code on
        GitHub and learn new skills. It's a great feeling when you have made
        something, others are using it and it makes their everyday life easier.
      </p>
      <p className="mb-6">
        I started coding as my hobby. In time it grew to be my obsession, it
        became fun. I worked as a freelance web designer and developer, coding
        themes and plugins for Wordpress and e107 CMS. I have made great
        friendships all over the world and those friends continue to be my
        greatest support and inspiration until now.
      </p>
      <p className="mb-6">
        I started from the web and learned my skills fast from HTML, CSS to
        Javascript and PHP.
      </p>
    </div>
    <div className="col-span-2">
      <img
        className="sm:ml-auto mt-6 sm:mt-24 sm:max-w-md"
        src={kerimisamir}
        alt="kerim i samir"
      />
    </div>
    <div className="col-span-3">
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-12">
        <div className="col-span-2 sm:col-span-1">
          <h4 className="text-white font-bold mb-6">Mobile world</h4>
          <p>
            With the spread of smartphones I started working on Android
            applications learning Java and Kotlin. I worked on native and hybrid
            Android applications using Javascript Angular and Ionic framework.
          </p>
        </div>
        <div className="col-span-2 sm:col-span-1">
          <h4 className="text-white font-bold mb-6">Why Javascript</h4>
          <p>
            Difference between mobile, web and desktop applications is starting
            to fade out. Javascript together with NodeJS is powerful tool which
            helps me to code for any platform and produce great results with one
            code base.
          </p>
        </div>
        <div className="col-span-2">
          <h4 className="text-white font-bold mb-6">How I see the future ?</h4>
          <p>
            Currently my tool of choice is Angular framework but tomorrow it
            could be Flutter which I’m already learning and exploring. AI is
            becoming a great tool for developers. Future is coming fast, it is
            as interesting as it is unknown so I better get ready for it.
          </p>
        </div>
      </div>
    </div>
    <div className="col-span-3 sm:col-span-2">
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
    <div className="col-span-3 sm:col-span-1">
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
