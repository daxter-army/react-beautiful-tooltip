import { Fragment, useRef } from "react";

import Tooltip from "../Tooltip/Tooltip";
import ImgTexTag from "../ImgTextTag/ImgTextTag";

import tooltipDataProps from "../../data";

const TooltipOnChild: React.FC<tooltipDataProps> = ({
  text,
  leftIcon,
  rightIcon,
  tooltipText,
  tooltipPlace
}) => {
  const tooltipParentRef = useRef<HTMLDivElement>(null);
  const tooltipChildRef = useRef<HTMLImageElement>(null);

  return (
    <Fragment>
      <ImgTexTag ref={tooltipParentRef}>
        <div className="tooltipInrTwo">
          {leftIcon && (
            <Tooltip
              adjustToParentRef={true}
              parentRef={tooltipParentRef}
              {...tooltipPlace}
              childRef={tooltipChildRef}
              text={tooltipText}
            >
              <img
                ref={tooltipChildRef}
                className="starIcon"
                src={leftIcon}
                alt="star-icon"
              />
            </Tooltip>
          )}
          <span>{text}</span>
          {rightIcon && (
            <Tooltip
              adjustToParentRef={true}
              parentRef={tooltipParentRef}
              {...tooltipPlace}
              childRef={tooltipChildRef}
              text={tooltipText}
            >
              <img
                ref={tooltipChildRef}
                className="starIcon"
                src={rightIcon}
                alt="star-icon"
              />
            </Tooltip>
          )}
        </div>
      </ImgTexTag>
      <br />
    </Fragment>
  );
};

export default TooltipOnChild;
