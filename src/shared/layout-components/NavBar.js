import { useState } from "react";
import { Link } from "react-scroll";

const NavBar = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const userScrolled = () => {
    setHasScrolled(true);
  };

  const userBackToTop = () => {
    setHasScrolled(false);
    if (open) {
      setOpen(false);
    }
  };

  const toggleOpen = () => {
    setOpen(!open);
  };

  const onSetActive = () => {
    if (open) {
      setOpen(false);
    }
  };

  return (
    <header
      className={
        "my-10 sticky top-0 z-10  " + (hasScrolled ? "bg-main-bg" : "")
      }
    >
      <div className="h-24 main-container flex justify-between items-center relative">
        <div>
          <h3 className="font-logo text-5xl text-white">
            <span className="text-main-brand">S</span>amir
          </h3>
          <h4 className="text-xs tracking-widest">
            <span className="text-white">KAHVEDZIC</span>/SKADIZZ
          </h4>
        </div>
        <nav className={open ? "open" : ""}>
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
                onSetActive={onSetActive}
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
                onSetActive={onSetActive}
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-120}
                onSetActive={onSetActive}
              >
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
                onSetActive={onSetActive}
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                to="contact-me"
                activeClass="active"
                spy={true}
                smooth={true}
                onSetActive={onSetActive}
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </nav>
        <div
          className="sm:hidden p-2 rounded border border-main-fg"
          onClick={toggleOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
