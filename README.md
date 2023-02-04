# react-beautiful-tooltip <img src="./readme-media/tooltip.png" width="28" />
##### Beautiful tooltip for your beautiful react projects.

## Docs

```<Tooltip {...props} />``` is the main component that take props and then render tooltip on the respective component.


| Props                    | Default value    | Possible Values                    | Description                                                                                             |
|--------------------------|------------------|------------------------------------|---------------------------------------------------------------------------------------------------------|
| ```xPlace```             | ```"center"```   | ```"left" / "center" / "right"```  | Positions the tooltip on the x-axis                                                                     |
| ```yPlace```             | ```"top"```      | ```"top" / "center" / "bottom"```  | Positions the tooltip on the y-axis                                                                     |
| ```sideClass```          | ```"topSide"```  | ```"topSide" / "bottomSide"```     | ```xPlace="left"``` & ```yPlace="top"``` can mean 2 things, used to distinguish between adjacent sides  |
| ```text```               | ```""```         | ```string```                       | tooltip text you want to show                                                                           |
| ```children```           | ```undefined```  | ```ReactNode```                    | Element to be wrapped with tooltip                                                                      |
| ```parentRef```          | ```undeinfed```  | ```React.MutableRefObject<any>```  | If your tooltip component is children to a component on which you want to align your tooltip wrt parent |
| ```childRef```           | ```undefined```  | ```React.MutableRefObject<any>```  | The ref applied to the child element passed as children to ```<Tooltip />```, **provide only when the above condition satisfies** |
| ```adjustToParentRef```  | ```false```      | ```boolean```                      | Toggle between aligning your tooltip to the activating element or its parent element                    |
| ```tooltipWidth```       | ```max-content```| ```number / string```              | If you want to give width to your tooltip component                                                     |

## Use-case

Currently this package provides you two modes:
* When the ```<Tooltip />``` component is itself the parent component, i.e when you hover on it, the tooltip aligns with respect to it.
* When the ```<Tooltip />``` component is children component, i.e when you hover on it, the tooltip aligns with respect to any of its parent component.
	* In this case you need to provide 2 additional props to the ```<Tooltip />``` component, i.e ```parentRef``` and ```childRef```.
	* ```parentRef``` being the ref applied on the parent component.
	* ```childRef``` being the ref applied on the component passed as children to the ```<Tooltip/>```.
## Development
To get started with the development on your machine:

1. Clone this repository
2. Go to the project directory
3. Hit ```npm install``` & then ```npm start```
4. And your project is live on ```localhost:3000```

