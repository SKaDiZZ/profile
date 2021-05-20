import profile from "../../assets/images/profile.png";

const Home = () => {
  return (
    <div className="flex items-center">
      <div className="flex-auto">
        <h3 className="text-2xl font-bold text-main-brand flex items-center mb-6">
          <svg
            className="w-8 h-6 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
              d="M20 12H4"
            ></path>
          </svg>
          Hello
        </h3>
        <h1 className="text-8xl font-bold text-white">
          I'M SAMIR <br /> KAHVEDZIC
        </h1>
        <h2 className="text-4xl my-6">Senior Frontend Developer</h2>
        <div className="flex gap-12 items-center">
          <button className="px-6 py-4 rounded bg-card-bg hover:border-t-2 hover:border-b-2 border-main-accent hover:text-main-accent">
            Contact Me
          </button>
          <a href="#" className="text-main-accent hover:underline">
            Download CV
          </a>
        </div>
      </div>
      <div className="w-1/2">
        <img src={profile} alt="my image" />
      </div>
    </div>
  );
};

export default Home;
