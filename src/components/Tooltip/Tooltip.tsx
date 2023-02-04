import React, { useState, useRef, useEffect, useCallback } from "react";

import TooltipProps from "./Props";

import "./Styles.css";

const Tooltip: React.FC<TooltipProps> = ({
	text,
	children,
	parentRef,
	childRef,
	yPlace = "top",
	xPlace = "center",
	sideClass = "topSide",
	adjustToParentRef = false,
	className = "",
	tooltipWidth = "max-content"
}) => {
	const tooltipRef = useRef<HTMLParagraphElement>(null);
	const [isTooltipOn, setIsTooltipOn] = useState(false);

	// const tooltipHandler = () => {
	//   if (xPlace === "center" && yPlace === "top") {
	//     // tooltipRef.current.style.top = `-${tooltipRef.current.clientHeight}px`;
	//   } else if (xPlace === "center" && yPlace === "bottom") {
	//     // tooltipRef.current.style.bottom = `-${tooltipRef.current.clientHeight}px`;
	//   }
	// };

	const parentTooltipHandler = useCallback(() => {
		if (!tooltipRef.current) return;

		const parentOffset = parentRef?.current.getBoundingClientRect();
		const tooltipOffset = tooltipRef.current.getBoundingClientRect();
		// const childOffset = childRef?.current.getBoundingClientRect();

		console.log("parent: ", parentOffset);
		console.log("tooltip: ", tooltipOffset);
		// console.log("child: ", childOffset);

		if (xPlace === "center" && yPlace === "top") {
			const xOffset = -(
				tooltipOffset.x -
				parentOffset.x -
				(parentOffset.width - tooltipOffset.width) / 2
			);
			const yOffset = -(
				tooltipOffset.y -
				parentOffset.y +
				tooltipOffset.height
			);

			tooltipRef.current.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
		} else if (xPlace === "center" && yPlace === "bottom") {
			const xOffset = -(
				tooltipOffset.x -
				parentOffset.x -
				(parentOffset.width - tooltipOffset.width) / 2
			);
			const yOffset = -(tooltipOffset.y - parentOffset.y - parentOffset.height);

			tooltipRef.current.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
		} else if (xPlace === "right" && yPlace === "center") {
			const xOffset = -(tooltipOffset.x - parentOffset.x - parentOffset.width);
			const yOffset = -(
				tooltipOffset.y -
				parentOffset.y -
				(parentOffset.height - tooltipOffset.height) / 2
			);

			tooltipRef.current.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
		} else if (xPlace === "left" && yPlace === "center") {
			const xOffset = -(tooltipOffset.x - parentOffset.x + tooltipOffset.width);
			const yOffset = -(
				tooltipOffset.y -
				parentOffset.y -
				(parentOffset.height - tooltipOffset.height) / 2
			);

			tooltipRef.current.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
		}
	}, [parentRef, tooltipRef, xPlace, yPlace]);

	// useEffect(() => {
	//   // ONLY FIRE IF, TOOLTIP REF IS AVAILABLE
	//   if (!tooltipRef.current) return;

	//   // ONLY FIRE IF, WANT TO ADJUST TOOLTIP TO ITS WRAPPING PARENT
	//   if (!adjustToParentRef && isTooltipOn) tooltipHandler();
	// }, [tooltipRef, adjustToParentRef, isTooltipOn]);

	useEffect(() => {
		// ONLY FIRE IF, TOOLTIP REF AND PARENT REF, BOTH ARE AVAILABLE
		if (!(parentRef?.current && tooltipRef.current && childRef?.current))
			return;

		if (adjustToParentRef && isTooltipOn) parentTooltipHandler();
	}, [
		parentRef,
		tooltipRef,
		childRef,
		parentTooltipHandler,
		adjustToParentRef,
		isTooltipOn
	]);

	return (
		<div
			className={`Tooltip ${className}`}
			onMouseEnter={() => setIsTooltipOn(true)}
			onMouseLeave={() => setIsTooltipOn(false)}
		>
			{text && isTooltipOn && (
				<p
					ref={tooltipRef}
					style={{ width: tooltipWidth }}
					className={`${adjustToParentRef ? "textTip" : "text"
						} ${xPlace} ${yPlace} ${sideClass}`}
				>
					{text}
				</p>
			)}
			{children}
		</div>
	);
};

export default Tooltip;