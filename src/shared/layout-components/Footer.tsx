import HeartIcon from "../icon-components/HeartIcon";

const Footer = () => (
  <footer className="mt-24 mb-12 border-t border-main-fg pt-6 flex flex-col md:flex-row space-y-4 md:space-y-0 justify-center md:justify-between">
    <div className="flex items-center">
      <span className="text-red-500 mr-2">
        <HeartIcon />
      </span>{" "}
      Created with <span className="text-main-accent mx-2"> Love </span> by
      Samir Kahvedzic
    </div>
    <div>All CopyRights Reserved 2023.</div>
  </footer>
);

export default Footer;
