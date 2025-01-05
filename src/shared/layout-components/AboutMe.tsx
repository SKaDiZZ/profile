import kerimisamir from "../../assets/images/samirikerim.png";

const AboutMe = () => (
  <div
    id="about-me"
    className="grid grid-cols-1 md:grid-cols-3 md:gap-12 my-12 w-full relative"
  >
    <div className="col-span-full md:col-span-1 text-left relative">
      <h4 className="card-subtitle text-base text-left mb-2">About Me</h4>
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
    <div className="col-span-full md:col-span-2 ">
      <img
        className="sm:ml-auto mt-6 sm:mt-24 sm:max-w-md"
        src={kerimisamir}
        alt="kerim i samir"
      />
    </div>
  </div>
);

export default AboutMe;
