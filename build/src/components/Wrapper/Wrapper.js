import React from "react";
import "./Wrapper.css";

//this component wraps all elements in the game
const Wrapper = props => <div className= "wrapper" >{props.children}</div>;

export default Wrapper;