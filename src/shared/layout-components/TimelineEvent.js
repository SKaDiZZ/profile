const TimelineEvent = ({
  position,
  timespan,
  title,
  description,
  image = null,
}) => {
  const leftBullet = (
    <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
      <div className="h-full w-6 flex items-center justify-center">
        <div className="h-full w-1 bg-card-bg pointer-events-none"></div>
      </div>
      <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-card-bg shadow"></div>
    </div>
  );

  const rightBullet = (
    <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
      <div className="h-full w-6 flex items-center justify-center">
        <div className="h-full w-1 bg-card-bg pointer-events-none"></div>
      </div>
      <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-card-bg shadow"></div>
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
            ? "col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto"
            : "col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
        } ${image ? "" : "bg-card-bg"}`}
      >
        <h4 className="text-xl font-bold text-main-brand flex items-center mb-2">
          {timespan}
        </h4>
        <h3 className="font-semibold text-lg mb-4">{title}</h3>
        <div
          className="leading-tight text-justify"
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
        <img src={image} alt="" />
      </div>
      {position === "left" ? leftBullet : ""}
    </div>
  );
};

export default TimelineEvent;
