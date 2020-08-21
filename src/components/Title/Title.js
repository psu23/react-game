import React from "react";
import "./Title.css";

//This component is for the title of the app
const Title = props => <div className = "title">{props.children}</div>;

export default Title;