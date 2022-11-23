import { FC } from "react";

import {
  TechnologyType,
  DirectionYType,
  DirectionXType,
} from "../../Interface/types";

interface TechFigType {
  technologies: TechnologyType[];
  activeTech: TechnologyType | null;
  animateDirection: DirectionYType | DirectionXType;
  width: number;
}

const TechFig: FC<TechFigType> = ({
  technologies,
  activeTech,
  animateDirection,
}) => {
  return (
    <>
      {technologies.map((tech) => (
        <picture
          className={`desktop-large:w-500 desktop:w-96 desktop:order-2 phone-small:order-1 ${
            tech.id === activeTech?.id
              ? `block animate-move-${animateDirection}`
              : "hidden"
          }`}
          key={`detailed-tech--item__fig-${tech.id}`}
        >
          <source
            media="(min-width: 1280px)"
            srcSet={activeTech?.images.portrait}
          />
          <source
            media="(min-width: 280px)"
            srcSet={activeTech?.images.landscape}
          />
          <img
            src={activeTech?.images.portrait}
            alt="our technology"
            className="w-full object-contain object-center"
          />
        </picture>
      ))}
    </>
  );
};

export default TechFig;
