import SettingsIcon from "@mui/icons-material/Settings";
import React, { useState } from "react";
import { CirclePicker } from "react-color";
import CustomButton from "../Button/Button";
import "./themeColor.scss";

const Color = () => {
  const [open,setOpen]=useState(false)
  const [main, setMain] = useState("#2196f3");
  document.documentElement.style.setProperty("--main-color", main);
  const handleChangeComplete = (color) => {
    setMain(color.hex);
  
  };
  
  const defaultColor =() => {
    
    setMain("#2196f3")
  }

  const color = [
    "#2196f3",
    "#ffc500",
    "#f44336",
    "#e91e63",
    "#9c27b0",
    "#673ab7",
    "#3f51b5",
    "#03a9f4",
    "#00bcd4",
    "#009688",
    "#4caf50",
    "#8bc34a",
    "#cddc39",
    "#ffeb3b",
    "#ffc107",
    "#ff5722",
    "#795548",
    "#607d8b",
  ];


  const showThemePanel=()=>{
    setOpen(!open)
  }


  return (
    <div className={`fixed ${open && 'show'} `}>
      <div className="wrapColor">
        <CirclePicker
          colors={color}
          circleSpacing={20}
          width="100px"
          circleSize={20}
          color={main}
          onChangeComplete={handleChangeComplete}
        />
      </div>
      <div className="wrapButton">
        <span  onClick={defaultColor}>
        <CustomButton
       
       text={"Default"}
       className="text-capitalize themeButton"
     />
    
        </span>
      
    
        <div className="settings ">
          <SettingsIcon className="SettingsIcon" onClick={showThemePanel} />
        </div>
      </div>
    </div>
  );
};

export default Color;
