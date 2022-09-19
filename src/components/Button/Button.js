import React from "react";
import { Button } from "@material-ui/core";

import "./Button.css";

const CustomButton = ({ text, icon, type }) => {
  return (
    <Button
      className="custom_btn"
      type={type || "button"}
      endIcon={icon ? <div className="btn_icon_container">{icon}</div> : null}>
      <span className="btn_text">{text}</span>
    </Button>
  );
};

export default CustomButton;
