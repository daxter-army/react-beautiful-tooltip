import { ReactNode } from "react";

export default interface TooltipOnParentProps {
	icon: ReactNode,
	text: string,
	tooltipPlace: {
		xPlace?: "top" | "right" | "bottom" | "left" | "center";
		yPlace?: "top" | "right" | "bottom" | "left" | "center";
		sideClass?: "topSide" | "bottomSide";
	};
	tooltipText: string;
}