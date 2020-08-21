import React from "react";
import "./CharacterCard.css";

//this component is for each of the 12 game piece images
const CharacterCard = props => (
    //on the click of card, capture its id
    //image is retrieved from characters.json
    <div
        className = "card"
        value = {props.id}
        onClick = {() => props.handleClick(props.id)}
        >
            <div className = "img-container">
                <img alt = {props.name} src = {props.image} />
            </div>
        </div>
);

export default CharacterCard;