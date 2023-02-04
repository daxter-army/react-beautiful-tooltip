import { useRef } from "react";

import Tooltip from "../Tooltip/Tooltip";
import ImgTexTag from "../ImgTextTag/ImgTextTag";

import TooltipOnChildProps from "./Props"

const TooltipOnChild: React.FC<TooltipOnChildProps> = ({
	text,
	leftIcon,
	rightIcon,
	tooltipText,
	tooltipPlace,
	adjustToParent = false
}) => {
	const tooltipParentRef = useRef<HTMLDivElement>(null);
	const tooltipChildRef = useRef<HTMLImageElement>(null);

	return (
		<ImgTexTag ref={tooltipParentRef}>
			<div className="tooltipInrTwo">
				{leftIcon && (
					<Tooltip
						{...tooltipPlace}
						text={tooltipText}
						childRef={tooltipChildRef}
						parentRef={tooltipParentRef}
						adjustToParentRef={adjustToParent}
					>
						<div
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center"
							}}
							ref={tooltipChildRef}
						>
							{leftIcon}
						</div>
					</Tooltip>
				)}
				<span>{text}</span>
				{rightIcon && (
					<Tooltip
						{...tooltipPlace}
						text={tooltipText}
						childRef={tooltipChildRef}
						parentRef={tooltipParentRef}
						adjustToParentRef={adjustToParent}
					>
						<div
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center"
							}}
							ref={tooltipChildRef}
						>
							{rightIcon}
						</div>
					</Tooltip>
				)}
			</div>
		</ImgTexTag>
	);
};

export default TooltipOnChild;
