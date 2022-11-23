import { FC, useState, useEffect } from "react";

import { useAppSelector } from "../../store/reducerHooks";
import { CrewType, DirectionXType } from "../../Interface/types";

import { SectionHeading } from "../Layouts";
import CrewDetailedItem from "./CrewDetailedItem";
import CrewSliderBTN from "./CrewSliderBTN";
import CrewFig from "./CrewFig";

const Crew: FC = () => {
  const { crew } = useAppSelector((state) => state.crew);
  const [activeMember, setActiveMember] = useState<CrewType | null>(null);

  const [activeIndex, setActiveIndex] = useState<number>(0);

  const [animateDirection, setAnimateDirection] = useState<DirectionXType>(
    DirectionXType.LEFT
  );

  function handleSlide(i: number) {
    if (i > activeIndex) setAnimateDirection(DirectionXType.LEFT);
    else setAnimateDirection(DirectionXType.RIGHT);

    setActiveMember(crew[i]);
    setActiveIndex(i);
  }

  function handleAutoSlider(prev: number) {
    if (animateDirection === DirectionXType.RIGHT)
      setAnimateDirection(DirectionXType.LEFT);

    if (prev === crew.length - 1) {
      setActiveMember(crew[0]);
      return 0;
    } else {
      setActiveMember(crew[prev + 1]);
      return prev + 1;
    }
  }

  useEffect(() => {
    setActiveMember(crew[0]);
    setActiveIndex(0);

    const sliderInterval = setInterval(() => {
      setActiveIndex(handleAutoSlider);
    }, 5000);

    return () => clearInterval(sliderInterval);
  }, [crew]);

  return (
    <div className="desktop:bg-crew-pattern-desktop phone:bg-crew-pattern-tablet phone-small:bg-crew-pattern-phone bg-cover bg-no-repeat">
      <div className="w-full max-w-container mx-auto desktop:h-screen phone-small:h-full flex desktop:flex-row phone-small:flex-col justify-between gap-12 desktop-large:px-40 desktop:px-24 phone-small:px-12  desktop:pt-24 phone:pt-32 phone-small:pt-20">
        <div className="flex-1 flex flex-col">
          <SectionHeading num="02" title="meet your crew" />
          {crew.map((member) => (
            <CrewDetailedItem
              key={`crew-member-detail-${member.id}`}
              id={member.id}
              activeMember={activeMember}
              animateDirection={animateDirection}
            />
          ))}
          <CrewSliderBTN
            handleSlide={handleSlide}
            crew={crew}
            activeMemberId={activeMember?.id || ""}
          />
        </div>
        <CrewFig
          crew={crew}
          activeMember={activeMember}
          animateDirection={animateDirection}
        />
      </div>
    </div>
  );
};

export default Crew;
