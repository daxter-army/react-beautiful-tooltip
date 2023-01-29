import React, { Fragment } from "react";

import Tooltip from "../Tooltip/Tooltip";
import ImgTexTag from "../ImgTextTag/ImgTextTag";

import tooltipDataProps from "../../data";

const TooltipOnParent: React.FC<tooltipDataProps> = ({
  icon,
  text,
  tooltipPlace,
  tooltipText
}) => {
  return (
    <Fragment>
      <Tooltip
        xPlace={tooltipPlace.xPlace}
        yPlace={tooltipPlace.yPlace}
        sideClass={tooltipPlace.sideClass}
        text={tooltipText}
      >
        <ImgTexTag leftIconImg={icon}>{text && <p>{text}</p>}</ImgTexTag>
      </Tooltip>
      <br />
    </Fragment>
  );
};

export default TooltipOnParent;
