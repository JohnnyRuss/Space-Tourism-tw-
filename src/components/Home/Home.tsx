import { FC } from "react";
import { useAppSelector } from "../../store/reducerHooks";
import { Heading, SubHeading, Text } from "../Layouts";

const Home: FC = () => {
  const { description, subTitle, title } = useAppSelector(
    (state) => state.home
  );

  return (
    <div className="desktop:bg-home-pattern-desktop phone:bg-home-pattern-tablet phone-small:bg-home-pattern-phone bg-cover bg-no-repeat">
      <div className="w-full max-w-container mx-auto h-screen flex desktop:flex-row phone-small:flex-col desktop:items-end pb-32 desktop:px-32 phone-small:px-0 phone-small:pt-24 phone-small:gap-20 overflow-x-hidden">
        <div className="desktop:flex-1 phone-small:flex flex-col desktop:items-start phone-small:items-center">
          <SubHeading
            text={subTitle}
            className="uppercase text-app-h5 !text-app-violet animate-move-right"
          />
          <Heading
            text={title}
            className="uppercase animate-move-rotate-90 origin-left"
          />
          <Text
            text={description}
            className="text-lg desktop:w-2/3 !text-app-violet animate-move-top desktop:max-w-full phone-small:max-w-md desktop:text-start phone-small:text-center"
          />
        </div>
        <div className="desktop:flex-1 flex justify-center animate-move-left duration-1">
          <button className="desktop-large:w-72 desktop:w-44 phone-small:w-32 aspect-square rounded-full bg-app-white text-app-black uppercase animate-move-rotate-opp">
            explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
