import HeartIcon from "../icon-components/HeartIcon";

const Footer = () => (
  <footer className="mt-24 mb-12 border-t border-main-fg pt-6 flex justify-center">
    <span className="text-red-500 mr-4">
      <HeartIcon />
    </span>{" "}
    Created with <span className="text-main-accent mx-2"> Love </span> by Samir
    Kahvedzic All CopyRights Reserved 2021.
  </footer>
);

export default Footer;
