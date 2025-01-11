import bg from "../../assets/images/circle.svg";
import TimelineEvent from "./TimelineEvent";
import eventList from "../data/event-list";

import Particles from "@/components/ui/particles";

const Timeline = () => {
  return (
    <section className="container" id="timeline">
      <div className="section-header">
        <h4 className="section-subtitle">Experience</h4>
        <h2>Short timeline of my life journey</h2>
        <Particles
          className="absolute inset-0"
          quantity={100}
          ease={80}
          color="#ffffff"
          refresh
        />
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
        {eventList.map((event: any, index: number) => (
          <TimelineEvent key={event.id} index={index} {...event} />
        ))}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[200px] bg-gradient-to-t from-main-bg"></div>
      </div>
    </section>
  );
};

export default Timeline;
