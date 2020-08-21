import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import CharacterCard from "./components/CharacterCard";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Container from "./Container";
import characters from "./characters.json";
import Message from "./components/Message";

//This function chooses random spots for the character cards to be placed after each click, to challenge the player
function mixCharacters(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {
  //save state elements: characters, scores, correct/incorrect message when relevant, and an array that keeps track of clicked images 
  state = {
    characters,
    currentScore: 0,
    topScore: 0,
    correctIncorrect: "",
    clicked: []
  };

  //keeps track of how many successful clicks are made
  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      correctIncorrect: ""
    });
    if (newScore >= this.state.topScore) {
      this.setState({topScore: newScore});
    }
    else if (newScore === 12) {
      this.setState({correctIncorrect: "You have said hi to everybody! You win."})
    }
    this.handleMix();
  }

  //when an image is click, save its id, determine whether it has been clicked yet; if yes, restart game
  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    }
    else {
      this.handleReset();
    }
  };

  //saves characters during each round
  handleMix = () => {
    let mixedCharacters = mixCharacters(characters);
    this.setState({ characters: mixedCharacters });
  };

  //when game is restarted, set current score to zero, display top score, tell user to click another card, and empty clicked cards array
  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      correctIncorrect: "Click a card to restart the game.",
      clicked: []
    });
    this.handleMix();
  };

  //upon rendering the page, display all stationary text on page
  render() {
    return (
      <Wrapper>
        <Nav
          title = "jujyfruit's party"
          score = {this.state.currentScore}
          topScore = {this.state.topScore}
        />

        <Title>
          Say hi to everyone at the party without saying hi to the same people twice! Inspired by Gregg Araki's film 'Nowhere'.
        </Title>

        <Container>
          {this.state.characters.map(character =>(
            <div className = "card-container">
              <CharacterCard
                key = {character.id}
                handleClick = {this.handleClick}
                handleIncrement = {this.handleIncrement}
                handleReset = {this.handleReset}
                handleMix = {this.handleMix}
                id = {character.id}
                image = {character.image}
              />
            </div>
          ))}
        </Container>

        <Message 
          correctIncorrect = {this.state.correctIncorrect}
        />

      </Wrapper>
    );

  }

}

export default App;
