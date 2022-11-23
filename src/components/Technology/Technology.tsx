import { FC, useEffect, useState } from "react";

import { useAppSelector } from "../../store/reducerHooks";
import {
  TechnologyType,
  DirectionYType,
  DirectionXType,
} from "../../Interface/types";
import useWindowDimention from "../../hooks/useWindowDimention";

import { SectionHeading, Text } from "../Layouts";
import TechnologiesSliderBTN from "./TechnologiesSliderBTN";
import DetailedTechItem from "./DetailedTechItem";
import TechFig from "./TechFig";

const Technology: FC = () => {
  const { width } = useWindowDimention();

  const { technologies } = useAppSelector((state) => state.technologies);

  const [activeTech, setActiveTech] = useState<TechnologyType | null>(null);

  const [animateDirection, setAnimateDirection] = useState<
    DirectionYType | DirectionXType
  >(width >= 1280 ? DirectionYType.TOP : DirectionXType.LEFT);

  const [activeIndex, setActiveIndex] = useState<number>(0);

  function handleTech(i: number) {
    if (activeIndex > i) {
      width >= 1280 && setAnimateDirection(DirectionYType.BOTTOM);
      width < 1280 && setAnimateDirection(DirectionXType.RIGHT);
    } else {
      width >= 1280 && setAnimateDirection(DirectionYType.TOP);
      width < 1280 && setAnimateDirection(DirectionXType.LEFT);
    }

    setActiveIndex(i);
    setActiveTech(technologies[i]);
  }

  useEffect(() => {
    setActiveTech(technologies[0]);
  }, [technologies]);

  return (
    <div className="desktop:bg-technology-pattern-desktop phone:bg-technology-pattern-tablet phone-small:bg-technology-pattern-phone bg-cover bg-no-repeat">
      <div className="w-full max-w-container desktop:h-screen phone-small:h-full desktop-large:pl-40 desktop:pl-24 phone-small:px-0 desktop-large:pb-28 desktop:pb-20 phone-small:pt-24">
        <SectionHeading
          num="03"
          title="pace launch 101"
          className="desktop:ml-0 phone-small:ml-3"
        />
        <div className="flex desktop:flex-row phone-small:flex-col justify-between gap-12 desktop:mt-0 phone-small:mt-10">
          <div className="desktop:w-1/2 phone-small:w-full flex desktop:flex-row phone-small:flex-col gap-8 desktop:mt-32 phone-small:mt-8 desktop:pb-0 phone-small:pb-8 desktop:order-1 phone-small:order-2">
            <TechnologiesSliderBTN
              technologies={technologies}
              activeTech={activeTech}
              handleTech={handleTech}
            />
            <div className="desktop:block phone-small:flex flex-col items-center desktop:text-start phone-small:text-center">
              <Text
                text="the technology ..."
                className="uppercase text-gray-600 !text-base"
              />
              {technologies.map((tech) => (
                <DetailedTechItem
                  id={tech.id}
                  activeTech={activeTech}
                  animateDirection={animateDirection}
                  key={`detailed-tech--item__${tech.id}`}
                />
              ))}
            </div>
          </div>
          <TechFig
            technologies={technologies}
            activeTech={activeTech}
            animateDirection={animateDirection}
            width={width}
          />
        </div>
      </div>
    </div>
  );
};

export default Technology;
