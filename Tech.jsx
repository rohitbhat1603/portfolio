import {BallCanvas} from "./canvas";
import {SectionWrapper} from "../hoc";
import {technologies} from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap 
    justify-content gap-10">
    {technologies.map((technology, index) => {
        const isMobile = window.matchMedia('(max-width: 640px)').matches;
        const className = index % 2 === 0 && isMobile ? 'w-28 h-28 ml-[30px]' : 'w-28 h-28';

        return (
          <div className={className} key={technology.name}>
            <BallCanvas icon={technology.icon}/>
          </div>
        );
    })}
    </div>
  )
}

export default SectionWrapper(Tech, "")