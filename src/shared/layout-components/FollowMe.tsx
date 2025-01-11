import XIcon from "../icon-components/XIcon";
import NpmIcon from "../icon-components/NpmIcon";
import GithubIcon from "../icon-components/GithubIcon";
import LinkedinIcon from "../icon-components/LinkedinIcon";
import DeviantartIcon from "../icon-components/DeviantartIcon";

const FollowMe = () => (
  <>
    <h4 className="card-subtitle text-base text-left mb-2">Follow?</h4>
    <h2 className="text-4xl font-bold text-white mb-12">
      Follow me and my work
    </h2>
    <div className="flex">
      <a
        className="soc-icon mr-4"
        href="https://github.com/SKaDiZZ"
        target="_blank"
        rel="noreferrer"
        title="GitHub"
      >
        <GithubIcon />
      </a>
      <a
        className="soc-icon mr-4"
        href="https://www.npmjs.com/~skadizz"
        target="_blank"
        rel="noreferrer"
        title="NPM"
      >
        <NpmIcon />
      </a>
      <a
        className="soc-icon mr-4"
        href="https://www.linkedin.com/in/samir-kahvedzic-96265594"
        target="_blank"
        rel="noreferrer"
        title="LinkedIn"
      >
        <LinkedinIcon />
      </a>
      <a
        className="soc-icon mr-4"
        href="https://x.com/SKaDiZZ"
        target="_blank"
        rel="noreferrer"
        title="X"
      >
        <XIcon />
      </a>
      <a
        className="soc-icon"
        href="https://www.deviantart.com/samirkahvedzic"
        target="_blank"
        rel="noreferrer"
        title="DeviantArt"
      >
        <DeviantartIcon />
      </a>
    </div>
  </>
);

export default FollowMe;
