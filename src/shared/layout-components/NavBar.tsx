import { useState } from "react";
import { Link } from "react-scroll";

const NavBar = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const menuItems = [
    {
      name: "Home",
      link: "home",
      offset: -180,
    },
    {
      name: "What I do?",
      link: "what-i-do",
      offset: -120,
    },
    {
      name: "About Me",
      link: "about-me",
      offset: -120,
    },
    {
      name: "Projects",
      link: "projects",
      offset: -120,
    },
    {
      name: "Contact",
      link: "contact",
      offset: -215,
    },
  ];

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
    <header className="sticky top-0 z-50 w-full border-b bg-main-bg/95 backdrop-blur supports-[backdrop-filter]:bg-main-bg/60 dark:border-border">
      <div className="flex h-14 items-center justify-between px-4">
        <div>
          <h3 className="font-logo text-4xl text-white">
            <span className="text-main-brand">S</span>amir
          </h3>
        </div>
        <nav
          className={`flex items-center gap-4 text-sm xl:gap-6 ${
            open ? "open" : ""
          }`}
        >
          <ul className="main-nav">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.link}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={item.offset}
                  onSetActive={onSetActive}
                >
                  {item.name}
                </Link>
              </li>
            ))}
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
