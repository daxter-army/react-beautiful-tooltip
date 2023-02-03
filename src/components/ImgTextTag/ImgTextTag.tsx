import { forwardRef } from "react";

import ImgTextTagProps from "./Props";

import "./Styles.css";

const ImgTextTag = forwardRef<HTMLDivElement, ImgTextTagProps>(
	({ leftIcon, children, rightIcon, tagWidth = "max-content" }, ref) => {
		return (
			<div ref={ref} style={{ width: tagWidth }} className="ImgTextTag">
				{leftIcon && leftIcon}
				{children && children}
				{rightIcon && rightIcon}
			</div>
		);
	}
);

export default ImgTextTag;
