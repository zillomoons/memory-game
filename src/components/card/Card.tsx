import React from "react";
import { IconType } from "react-icons";
import { FaQuestion } from "react-icons/fa";
import { CardWrapper } from "./CardStyle";

export const Card = ({ icon }: PropsType) => {
  const isShowingFront = false;
  return (
    <CardWrapper>
      {isShowingFront ? React.createElement(icon, null, null) : <FaQuestion />}
    </CardWrapper>
  );
};
type PropsType = {
  icon: IconType;
  id: number;
};
