import { MagicCard } from "@/components/ui/magic-card";
import Marquee from "@/components/ui/marquee";

const ProjectCard = ({ client, name, url, description, tags }: any) => (
  <MagicCard
    className="select-none flex flex-col justify-between shadow-2xl whitespace-nowrap mb-6"
    gradientColor="#1959ad80"
  >
    <div className="flex flex-col w-full whitespace-normal p-6 mb-20">
      <h4 className="card-subtitle text-base text-left">{client}</h4>
      <h2 className="card-title text-left">{name}</h2>
      <p className="text-left text-base">{description}</p>
      <div className="mt-4 text-left">
        <a
          href={url}
          className="text-main-accent hover:underline text-base"
          target="_blank"
          rel="noreferrer"
        >
          {url}
        </a>
      </div>
    </div>
    <div className="absolute bottom-2 overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {tags.map((tag: string) => (
          <div className="tag" key={tag}>
            {tag}
          </div>
        ))}
      </Marquee>
    </div>
  </MagicCard>
);

export default ProjectCard;
