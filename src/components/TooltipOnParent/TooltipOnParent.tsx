import React, { Fragment } from "react";

import Tooltip from "../Tooltip/Tooltip";
import ImgTexTag from "../ImgTextTag/ImgTextTag";

import TooltipOnParentProps from "./Props"

const TooltipOnParent: React.FC<TooltipOnParentProps> = ({
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
				<ImgTexTag leftIcon={icon}>{text && <p>{text}</p>}</ImgTexTag>
			</Tooltip>
			<br />
		</Fragment>
	);
};

export default TooltipOnParent;
