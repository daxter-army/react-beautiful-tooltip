import { ReactNode } from "react";

export default interface TooltipOnChildProps {
	text: string;
	leftIcon?: ReactNode;
	rightIcon?: ReactNode;
	tooltipPlace: {
		xPlace?: "top" | "right" | "bottom" | "left" | "center";
		yPlace?: "top" | "right" | "bottom" | "left" | "center";
		sideClass?: "topSide" | "bottomSide";
	};
	tooltipText: string;
	adjustToParent?: boolean;
}