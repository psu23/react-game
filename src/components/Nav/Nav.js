import React from "react";
import "./Nav.css";

//this component is for the navigation bar that shows the app title, current and top scores
const Nav = (props) => (
    <nav>
        <div className="flash brand animated">
            <a href="/react-clicky-game/">{props.title}</a>
        </div>

        <div className="scores">
            <div className="current-score">
                Current Score: {props.score}
            </div>
            <div className="current-score">
                Top Score: {props.topScore}
            </div>
        </div>
    </nav>
);

export default Nav;