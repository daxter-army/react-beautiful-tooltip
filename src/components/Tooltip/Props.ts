import React, { ReactNode } from "react";

export default interface TooltipProps {
	text: string;
	children?: ReactNode;
	tooltipWidth?: number | string;
	xPlace?: "top" | "right" | "bottom" | "left" | "center";
	yPlace?: "top" | "right" | "bottom" | "left" | "center";
	sideClass?: "topSide" | "bottomSide" | "";
	adjustToParentRef?: boolean;
	parentRef?: React.MutableRefObject<any>;
	childRef?: React.MutableRefObject<any>;
}
