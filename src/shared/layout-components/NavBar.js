import { useState } from "react";
import { Link } from "react-scroll";

const NavBar = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  const userScrolled = () => {
    setHasScrolled(true);
  };

  const userBackToTop = () => {
    setHasScrolled(false);
  };

  return (
    <header
      className={
        "my-10 sticky top-0 z-10  " + (hasScrolled ? "bg-main-bg" : "")
      }
    >
      <div className="h-24 main-container flex justify-between items-center">
        <div>
          <h3 className="font-logo text-5xl text-white">
            <span className="text-main-brand">S</span>amir
          </h3>
          <h4 className="text-xs tracking-widest">
            <span className="text-white">KAHVEDZIC</span>/SKADIZZ
          </h4>
        </div>
        <nav>
          <ul className="main-nav">
            <li>
              <Link
                to="home"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-180}
                onSetActive={userBackToTop}
                onSetInactive={userScrolled}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="what-i-do"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-120}
              >
                What I do?
              </Link>
            </li>
            <li>
              <Link
                to="about-me"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-120}
              >
                About Me
              </Link>
            </li>
            <li>
              <Link to="about-me" activeClass="active" spy={true} smooth={true}>
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="timeline"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-120}
              >
                Experience
              </Link>
            </li>
            <li>
              <Link to="/home" activeClass="active" spy={true} smooth={true}>
                Contact Me
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
