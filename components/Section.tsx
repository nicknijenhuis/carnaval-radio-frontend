import { ReactElement, ReactNode } from "react";
import SectionTitle from "./constants/SectionTitle";

type SectionProps = {
  title: string;
  icon?: any;
  children: ReactNode;
  iconElement?: ReactElement;
};

const Section = ({ title, icon, iconElement, children }: SectionProps) => {
  return (
    <div className="py-4 px-4 sm:px-4 md:px-8 lg:px-8 xl:px-8">
      <div className="flex justify-between items-center">
        <SectionTitle title={title} image={icon} iconElement={iconElement} />
      </div>
      {children}
    </div>
  );
};

export default Section;
