import HeartIcon from "../icon-components/HeartIcon";

const Footer = () => (
  <footer className="mt-4 mb-24">
    <div className="flex flex-wrap items-center">
      <span className="text-red-500 mr-2">
        <HeartIcon />
      </span>{" "}
      Created with <span className="text-main-accent mx-2"> Love </span> by
      Samir Kahvedzic 2025.
    </div>
  </footer>
);

export default Footer;
