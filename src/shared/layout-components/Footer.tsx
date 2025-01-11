import HeartIcon from "../icon-components/HeartIcon";

const Footer = () => (
  <footer className="mt-4 mb-24">
    <p className="flex text-center md:text-left">
      <span className="text-red-500 mr-2">
        <HeartIcon />
      </span>{" "}
      Created with <span className="text-main-accent mx-2"> Love </span> by
      Samir Kahvedzic 2025.
    </p>
  </footer>
);

export default Footer;
