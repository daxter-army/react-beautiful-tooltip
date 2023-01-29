import { forwardRef } from "react";

import ImgTextTagProps from "./Props";

import "./Styles.css";

const ImgTextTag = forwardRef<HTMLDivElement, ImgTextTagProps>(
  ({ leftIconImg, children, rightIconImg, tagWidth = "max-content" }, ref) => {
    return (
      <div ref={ref} style={{ width: tagWidth }} className="ImgTextTag">
        {leftIconImg && <img src={leftIconImg} alt="left-icon" />}
        {children && children}
        {rightIconImg && <img src={rightIconImg} alt="right-icon" />}
      </div>
    );
  }
);

export default ImgTextTag;
