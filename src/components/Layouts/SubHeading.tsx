import { FC, ReactNode } from "react";

interface SubHeadingType {
  text: ReactNode;
  className?: string;
}

const SubHeading: FC<SubHeadingType> = ({ text, className }) => {
  return (
    <h3
      className={`desktop-large:text-app-h3 desktop:text-app-h4 phone:text-app-h5 phone-small:text-xl text-app-white ${className}`}
    >
      {text}
    </h3>
  );
};

export default SubHeading;
