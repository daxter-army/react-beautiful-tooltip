import { GrGamepad } from "react-icons/gr";
import { BsVectorPen } from "react-icons/bs";
import { MdEmojiPeople } from "react-icons/md";
import { FcBriefcase, FcPuzzle } from "react-icons/fc";
import { FaBomb, FaPaintBrush, FaVolleyballBall } from "react-icons/fa";
import {
  GiOfficeChair,
  GiComputerFan,
  GiGamepadCross,
  GiIsland,
  GiAvocado,
  GiOstrich,
  GiExplodingPlanet
} from "react-icons/gi";

import Tooltip from "./components/Tooltip/Tooltip";
import ImgTextTag from "./components/ImgTextTag/ImgTextTag";
import TooltipOnChild from "./components/TooltipOnChild/TooltipOnChild";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="header">
        <div>
          <h1>react-beautiful-tooltip</h1>
          <p>Beautiful tooltip for your beautiful react projects.</p>
        </div>
        <Tooltip
          xPlace={"center"}
          yPlace={"top"}
          text={"Click on this link to open Docs! 📄"}
        >
          <a
            className="docsLink"
            href="https://github.com/daxter-army/react-beautiful-tooltip"
          >
            <span>Docs | Github Repository</span>
            <img
              width={32}
              src={"https://raw.githubusercontent.com/daxter-army/react-beautiful-calendar/main/readme-media/github-logo.svg"}
              alt="github-logo"
            />
          </a>
        </Tooltip>
      </div>
      <div className="tooltipCtr">
        <div className="row">
          <Tooltip
            xPlace={"left"}
            yPlace={"top"}
            sideClass={"topSide"}
            text={"What's your favourite sport?"}
          >
            <ImgTextTag rightIcon={<FaVolleyballBall size={16} />}>
              I like to play Volleyball
            </ImgTextTag>
          </Tooltip>
          <Tooltip
            xPlace={"center"}
            yPlace={"top"}
            text={"Bears. Beets. Battlestar Galactica."}
          >
            <ImgTextTag leftIcon={<GiOfficeChair size={16} />}>The Office?</ImgTextTag>
          </Tooltip>
        </div>
        <div className="row">
          <Tooltip
            xPlace={"right"}
            yPlace={"top"}
            sideClass={"topSide"}
            text="👈 It's showtime folks 👉"
          >
            <ImgTextTag leftIcon={<FcBriefcase size={16} />}>
              Have you watched Better Call Saul?
            </ImgTextTag>
          </Tooltip>
          <Tooltip xPlace={"right"} yPlace={"top"} text={"It is one of the best 💯"}>
            <ImgTextTag rightIcon={<FaBomb size={16} />}>
              I also play Minesweeper sometimes
            </ImgTextTag>
          </Tooltip>
        </div>
        <div className="row">
          <Tooltip
            xPlace={"right"}
            yPlace={"center"}
            text={"Well I also like to musical keyboard 🎹"}
          >
            <ImgTextTag leftIcon={<FaPaintBrush size={16} />}>
              Do you have any hobbies?
            </ImgTextTag>
          </Tooltip>
          <Tooltip
            xPlace={"right"}
            yPlace={"bottom"}
            text={"While it's very cold these days in India"}
          >
            <ImgTextTag rightIcon={<MdEmojiPeople size={16} />}>
              So what's Poppin ?
            </ImgTextTag>
          </Tooltip>
          <Tooltip
            xPlace={"right"}
            yPlace={"bottom"}
            sideClass={"bottomSide"}
            text={"COD, Forza, GTA are some to begin with 😁"}
          >
            <ImgTextTag leftIcon={<GrGamepad size={16} />}>
              Do you play video games?
            </ImgTextTag>
          </Tooltip>
        </div>
        <div className="row">
          <Tooltip
            xPlace={"center"}
            yPlace={"bottom"}
            text={"I like to play Sudoku"}
          >
            <ImgTextTag rightIcon={<FcPuzzle size={16} />}>
              Do you like any puzzle game?
            </ImgTextTag>
          </Tooltip>
          <Tooltip
            xPlace={"left"}
            yPlace={"bottom"}
            sideClass={"bottomSide"}
            text={"I like to draw in adobe illustrator sometimes"}
          >
            <ImgTextTag rightIcon={<BsVectorPen size={16} />}>
              Do you like digital arts?
            </ImgTextTag>
          </Tooltip>
          <Tooltip xPlace={"left"} yPlace={"bottom"} text={"I am a PC fan 😎"}>
            <ImgTextTag rightIcon={<FaVolleyballBall size={16} />}>
              Gaming console or PC?
            </ImgTextTag>
          </Tooltip>
        </div>
        <div className="row">
          <Tooltip
            xPlace={"left"}
            yPlace={"center"}
            sideClass={"topSide"}
            text={"Linux gives you the freedom to customize anything"}
          >
            <ImgTextTag rightIcon={<GiComputerFan size={16} />}>What is your favourite OS?</ImgTextTag>
          </Tooltip>
          <Tooltip xPlace={"left"} yPlace={"top"} text={"Prince of Persia: Warrior Within"}>
            <ImgTextTag rightIcon={<GiGamepadCross size={16} />}>Your favourite video game of all time?</ImgTextTag>
          </Tooltip>
        </div>
      </div>
      <br />
      <br />
      <br />
      <p className="infoText">
        <b>
          Here, on hovering over a child area, triggers tooltip on the parent
          component.
        </b>
      </p>
      <br />
      <br />
      <div className="tooltipCtr">
        <div className="row">
          <TooltipOnChild
            adjustToParent={true}
            text={"Do you know how many islands are in Phillipines?"}
            rightIcon={<GiIsland size={16} />}
            // rightIcon={item.rightIcon}
            tooltipText={"Approximately 7,641 islands..."}
            tooltipPlace={{
              xPlace: "center",
              yPlace: "top"
            }}
          />
          <TooltipOnChild
            adjustToParent={true}
            text={"An ostrich's eye is bigger than its brain"}
            rightIcon={<GiOstrich size={16} />}
            // rightIcon={item.rightIcon}
            tooltipText={"Yes, that's true..."}
            tooltipPlace={{
              xPlace: "center",
              yPlace: "bottom"
            }}
          />
        </div>
        <div className="row">
          <TooltipOnChild
            adjustToParent={true}
            text={"Venus is the only planet to spin clockwise"}
            leftIcon={<GiExplodingPlanet size={16} />}
            // rightIcon={item.rightIcon}
            tooltipText={"A year is 225 Earth days"}
            tooltipPlace={{
              xPlace: "right",
              yPlace: "center"
            }}
          />
          <TooltipOnChild
            adjustToParent={true}
            text={"Are Avocados fruit or vegetables?"}
            leftIcon={<GiAvocado size={16} />}
            // rightIcon={item.rightIcon}
            tooltipText="They're technically considered a single-seeded berry, a fruit"
            tooltipPlace={{
              xPlace: "left",
              yPlace: "center"
            }}
          />
        </div>
      </div>
    </div>
  );
}
