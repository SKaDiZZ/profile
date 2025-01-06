import EmailIcon from "../icon-components/EmailIcon";
import GithubIcon from "../icon-components/GithubIcon";
import LinkedinIcon from "../icon-components/LinkedinIcon";
import MarkerIcon from "../icon-components/MarkerIcon";
import XIcon from "../icon-components/XIcon";

const ContactMe = () => (
  <section id="contact-me" className="mb-12 mt-24 relative z-10">
    <div className="section-subheader">
      <h4 className="section-subtitle text-left mb-6">Contact Me</h4>
      <h2 className="text-4xl font-bold text-white mb-12">
        Find out more, colaborate on project with me?
      </h2>
      <p>
        Feel free to contact me, ask for more information about me and my work
        or let&rsquo;s colaborate on different projects. Lets code together.
      </p>
    </div>
    <div className="py-12 bg-gradient-to-r from-transparent via-[#1959ad21] to-transparent relative">
      <div className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-border to-transparent top-0"></div>
      <div className="my-12">
        <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
          <div className="flex items-center md:border-r mb-12 md:mb-0 pr-6">
            <span className="mr-4">
              <MarkerIcon />
            </span>
            Sarajevo, Bosnia and Herzegovina
          </div>

          <a className="contact-link" href="mailto:akirapowered@gmail.com">
            <span className="mr-4">
              <EmailIcon />{" "}
            </span>
            Email
          </a>

          <a className="contact-link" href="https://x.com/SKaDiZZ">
            <span className="mr-4">
              <XIcon />{" "}
            </span>
            X
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
  </section>
);

export default ContactMe;
