import speedCodingThumb from "../../assets/images/speed-coding.png";
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";

export const WatchMeCode = () => {
  return (
    <div
      id="watch-me-code"
      className="grid grid-cols-1 md:grid-cols-3 md:gap-x-12 my-12 w-full relative"
    >
      <div className="col-span-full text-left">
        <h4 className="card-subtitle text-base mb-2">Code</h4>
        <h2 className="text-4xl font-bold text-white mb-12">Watch me code</h2>
      </div>
      <div className="col-span-3 sm:col-span-1 text-left">
        <p>
          Speed coding classic brick breaker game on codepen using HTML Canvas
          and vanila Javascript followed by some cool music in the background.
        </p>
      </div>
      <div className="col-span-full md:col-span-2 mt-12 md:mt-0">
        <HeroVideoDialog
          className="dark:hidden block"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/N8jMzuNdSew"
          thumbnailSrc={speedCodingThumb}
          thumbnailAlt="Speed coding classic brick breaker game on codepen using HTML Canvas and vanila Javascript followed by some cool music in the background."
        />
      </div>
    </div>
  );
};
