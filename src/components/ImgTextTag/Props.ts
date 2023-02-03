import { ReactNode } from "react";

export default interface ImgTextTagProps {
	leftIcon?: ReactNode;
	rightIcon?: ReactNode;
	tagWidth?: string | number;
	children: ReactNode;
}
