import TooltipOnParent from "./components/TooltipOnParent/TooltipOnParent";
import TooltipOnChild from "./components/TooltipOnChild/TooltipOnChild";

import { tooltipData, tooltipChildData } from "./data";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>react-beautiful-tooltip</h1>
      <p>
        <b>Here the whole component is area on which the tooltip is applied.</b>
      </p>
      {tooltipData.map((item) => (
        <TooltipOnParent
          key={item.id}
          icon={item.icon}
          text={item.text}
          tooltipText={item.tooltipText}
          tooltipPlace={item.tooltipPlace}
        />
      ))}
      <br />
      <br />
      <p>
        <b>
          Here, on hovering over a child area, triggers tooltip on the parent
          component.
        </b>
      </p>
      {tooltipChildData.map((item) => (
        <TooltipOnChild
          key={item.id}
          text={item.text}
          leftIcon={item.leftIcon}
          rightIcon={item.rightIcon}
          tooltipText={item.tooltipText}
          tooltipPlace={item.tooltipPlace}
        />
      ))}
    </div>
  );
}
