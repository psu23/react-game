import React from "react";
import "./Message.css";

//this component is for showing messages to the user when they make (incorrect) guesses
const Message = props => (
    <div id = "cor-inc">
        {props.correctIncorrect}
    </div>
);

export default Message;