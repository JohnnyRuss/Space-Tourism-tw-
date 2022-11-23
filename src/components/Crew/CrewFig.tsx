import { FC } from "react";
import { CrewType, DirectionXType } from "../../Interface/types";

interface CrewFigType {
  crew: CrewType[];
  activeMember: CrewType | null;
  animateDirection: DirectionXType;
}

const CrewFig: FC<CrewFigType> = ({ crew, activeMember, animateDirection }) => {
  return (
    <>
      {crew.map((member) => (
        <figure
          key={`crew-member-fig-${member.id}`}
          className={`flex-1 flex justify-center ${
            member.id === activeMember?.id
              ? `block animate-move-${animateDirection}`
              : "hidden"
          }`}
        >
          <img src={activeMember?.images.webp} alt="" />
        </figure>
      ))}
    </>
  );
};

export default CrewFig;
