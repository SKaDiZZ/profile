import StrokeIcon from "../icon-components/StrokeIcon";
import TimelineEvent from "./TimelineEvent";
import eventList from "../data/event-list";

const Timeline = () => {
  return (
    <div className="container" id="timeline">
      <h4 className="text-xl font-bold text-main-brand flex items-center mb-6">
        <StrokeIcon />
        Experience
      </h4>
      <h2 className="text-4xl font-bold text-white mb-12">
        Short timeline of my life journey
      </h2>
      <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
        {eventList.map((event: any) => (
          <TimelineEvent key={event.id} {...event} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
