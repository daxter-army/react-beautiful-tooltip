import { ReactNode } from "react";

export default interface ImgTextTagProps {
  leftIconImg?: string;
  rightIconImg?: string;
  tagWidth?: string | number;
  children: ReactNode;
}
