import EmailIcon from "../icon-components/EmailIcon";
import GithubIcon from "../icon-components/GithubIcon";
import LinkedinIcon from "../icon-components/LinkedinIcon";
import StrokeIcon from "../icon-components/StrokeIcon";
import TwitterIcon from "../icon-components/TwitterIcon";

const ContactMe = () => (
  <div id="contact-me" className="my-12">
    <h4 className="text-xl font-bold text-main-brand flex items-center mb-6">
      <StrokeIcon />
      Contact Me
    </h4>
    <h2 className="text-4xl font-bold text-white mb-12">
      Find out more, colaborate on project with me?
    </h2>
    <p>
      Feel free to contact me, ask for more information about me and my work or
      let's colaborate on different projects. Lets code together.
    </p>
    <div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 gap-12 my-12"
        href="mailto:akirapowerd@gmail.com"
      >
        <a className="contact-link">
          <span className="mr-4">
            <EmailIcon />{" "}
          </span>
          Email me
        </a>

        <a className="contact-link" href="https://twitter.com/SKaDiZZ">
          <span className="mr-4">
            <TwitterIcon />{" "}
          </span>
          Twitter
        </a>

        <a
          className="contact-link"
          href="https://www.linkedin.com/in/samir-kahvedzic-96265594"
        >
          <span className="mr-4">
            <LinkedinIcon />{" "}
          </span>
          LinkedIn
        </a>

        <a className="contact-link" href="https://github.com/SKaDiZZ">
          <span className="mr-4">
            <GithubIcon />{" "}
          </span>
          GitHub
        </a>
      </div>
    </div>
  </div>
);

export default ContactMe;
