import CloudIcon from "./assets/cloud-solid.png";
// import StarIcon from "./assets/star-solid.png";
import InfoIcon from "./assets/info-circle-solid.png";

export default interface tooltipDataProps {
  id?: number;
  text: string;
  icon?: string;
  leftIcon?: string;
  rightIcon?: string;
  tooltipText: string;
  tooltipPlace: {
    xPlace?: "top" | "right" | "bottom" | "left" | "center";
    yPlace?: "top" | "right" | "bottom" | "left" | "center";
    sideClass?: "topSide" | "bottomSide" | "";
  };
}

// DATA FOR TOOLTIP ON PARENT
export const tooltipData: tooltipDataProps[] = [
  {
    id: 1,
    text: "This Tooltip is being served to you via cloud!.",
    icon: CloudIcon,
    tooltipText: "Awesome tooltip text 💯!",
    tooltipPlace: {
      xPlace: "left",
      yPlace: "top",
      sideClass: "topSide"
    }
  },
  {
    id: 2,
    text: "You need to see this!",
    icon: InfoIcon,
    tooltipText: "You are looking like a star today 💯!",
    tooltipPlace: {
      xPlace: "center",
      yPlace: "top"
    }
  },
  {
    id: 3,
    text: "This Tooltip is being served to you via cloud!.",
    icon: CloudIcon,
    tooltipText: "Awesome tooltip text 💯!",
    tooltipPlace: {
      xPlace: "right",
      yPlace: "top",
      sideClass: "topSide"
    }
  },
  {
    id: 4,
    text: "This Tooltip is being served to you via cloud!.",
    icon: CloudIcon,
    tooltipText: "Awesome tooltip text 💯!",
    tooltipPlace: {
      xPlace: "right",
      yPlace: "top"
    }
  },
  {
    id: 5,
    text: "This Tooltip is being served to you via cloud!.",
    icon: CloudIcon,
    tooltipText: "Awesome tooltip text 💯!",
    tooltipPlace: {
      xPlace: "right",
      yPlace: "center"
    }
  },
  {
    id: 6,
    text: "This Tooltip is being served to you via cloud!.",
    icon: CloudIcon,
    tooltipText: "Awesome tooltip text 💯!",
    tooltipPlace: {
      xPlace: "right",
      yPlace: "bottom"
    }
  },
  {
    id: 7,
    text: "This Tooltip is being served to you via cloud!.",
    icon: CloudIcon,
    tooltipText: "Awesome tooltip text 💯!",
    tooltipPlace: {
      xPlace: "right",
      yPlace: "bottom",
      sideClass: "bottomSide"
    }
  },
  {
    id: 8,
    text: "This Tooltip is being served to you via cloud!.",
    icon: CloudIcon,
    tooltipText: "Awesome tooltip text 💯!",
    tooltipPlace: {
      xPlace: "center",
      yPlace: "bottom"
    }
  },
  {
    id: 9,
    text: "This Tooltip is being served to you via cloud!.",
    icon: CloudIcon,
    tooltipText: "Awesome tooltip text 💯!",
    tooltipPlace: {
      xPlace: "left",
      yPlace: "bottom",
      sideClass: "bottomSide"
    }
  },
  {
    id: 10,
    text: "This Tooltip is being served to you via cloud!.",
    icon: CloudIcon,
    tooltipText: "Awesome tooltip text 💯!",
    tooltipPlace: {
      xPlace: "left",
      yPlace: "bottom"
    }
  },
  {
    id: 11,
    text: "This Tooltip is being served to you via cloud!.",
    icon: CloudIcon,
    tooltipText: "Awesome tooltip text 💯!",
    tooltipPlace: {
      xPlace: "left",
      yPlace: "center"
    }
  },
  {
    id: 12,
    text: "This Tooltip is being served to you via cloud!.",
    icon: CloudIcon,
    tooltipText: "Awesome tooltip text 💯!",
    tooltipPlace: {
      xPlace: "left",
      yPlace: "top"
    }
  }
];

// DATA FOR WHEN A TOOLTIP IS INVOKED BT A CHILDREN COMPONENT
export const tooltipChildData: tooltipDataProps[] = [
  {
    id: 1,
    text: "Hover on the Info icon to reveal a secret",
    tooltipText: "You are a star! ⭐",
    leftIcon: InfoIcon,
    tooltipPlace: {
      xPlace: "center",
      yPlace: "top"
    }
  },
  {
    id: 2,
    text: "Hover on the Info icon to reveal a secret",
    tooltipText: "You are a star! ⭐",
    rightIcon: InfoIcon,
    tooltipPlace: {
      xPlace: "right",
      yPlace: "center"
    }
  },
  {
    id: 3,
    text: "Hover on the Info icon to reveal a secret",
    tooltipText: "You are a star! ⭐",
    leftIcon: InfoIcon,
    tooltipPlace: {
      xPlace: "center",
      yPlace: "bottom"
    }
  },
  {
    id: 4,
    text: "Hover on the Info icon to reveal a secret",
    tooltipText: "You are a star! ⭐",
    rightIcon: InfoIcon,
    tooltipPlace: {
      xPlace: "left",
      yPlace: "center"
    }
  }
];
