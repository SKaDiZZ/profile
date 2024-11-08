import { MagicCard } from "@/components/ui/magic-card";

const TimelineEvent = ({
  position,
  timespan,
  title,
  description,
  image = null,
}: any) => {
  const leftBullet = (
    <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
      <div className="h-full w-6 flex items-center justify-center">
        <div className="h-full w-[1px] bg-border pointer-events-none"></div>
      </div>

      <div className="w-12 h-12 absolute -left-1/2 top-1/2 -mt-3 rounded-full border flex items-center justify-center animate-ping"></div>
      <div className="absolute top-1/2 w-6 h-6 rounded-full border flex items-center justify-center z-10">
        <div className="w-2 h-2 rounded-full border bg-background/5 backdrop-blur-xl"></div>
        <div className="w-10 h-[1px] absolute right-6 bottom-1/2 -mt-3 rounded-full border flex items-center justify-center"></div>
      </div>
    </div>
  );

  const rightBullet = (
    <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
      <div className="h-full w-6 flex items-center justify-center">
        <div className="h-full w-[1px] bg-border pointer-events-none"></div>
      </div>
      <div className="w-12 h-12 absolute -left-1/2 top-1/2 -mt-3 rounded-full border flex items-center justify-center animate-ping "></div>
      <div className="absolute top-1/2 w-6 h-6 rounded-full border flex items-center justify-center">
        <div className="w-2 h-2 rounded-full border bg-background/5 backdrop-blur-xl"></div>
        <div className="w-10 h-[1px] absolute left-6 bottom-1/2 -mt-3 rounded-full border flex items-center justify-center"></div>
      </div>
    </div>
  );

  return (
    <div
      className={`flex md:contents ${
        position === "right" ? "" : "flex-row-reverse"
      }`}
    >
      {position === "right" ? rightBullet : ""}
      <div
        className={`${
          position === "right"
            ? "col-start-6 col-end-10 rounded-xl my-4 mr-auto"
            : "col-start-1 col-end-5 rounded-xl my-4 ml-auto shadow-md"
        }`}
      >
        <MagicCard
          className="select-none flex flex-col justify-between shadow-2xl mb-6 p-4"
          gradientColor="#1959ad80"
        >
          <h4 className="section-subtitle text-left mb-4">{timespan}</h4>
          <h3 className="font-semibold md:text-lg mb-4 text-left text-white">
            {title}
          </h3>
          <div
            className="leading-tight text-left text-sm md:text-base"
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
          <img src={image} alt="" />
        </MagicCard>
      </div>

      {position === "left" ? leftBullet : ""}
    </div>
  );
};

export default TimelineEvent;
