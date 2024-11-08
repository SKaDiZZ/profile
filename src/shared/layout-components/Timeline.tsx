import bg from "../../assets/images/circle.svg";
import TimelineEvent from "./TimelineEvent";
import eventList from "../data/event-list";

const Timeline = () => {
  return (
    <section className="container" id="timeline">
      <div className="section-header">
        <h4 className="section-subtitle">Experience</h4>
        <h2>Short timeline of my life journey</h2>
        <div className="section-header-bg">
          <img
            alt="Outlines"
            loading="lazy"
            width="960"
            height="380"
            decoding="async"
            className="relative z-[2]"
            src={bg}
          />
        </div>
      </div>
      <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50 relative">
        {eventList.map((event: any) => (
          <TimelineEvent key={event.id} {...event} />
        ))}
      </div>
    </section>
  );
};

export default Timeline;
