import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Instruction from "./components/Instruction";
import GameOver from "./components/GameOver";
import spongeBob from "./spongeBobs.json";

const totalCards = 10;
let selectedCards = [];
let selectedIndex = [];
let clickedIndex = [];
let currentScore = 0;
let isGameOver = false;

let shuffle = function () {
  selectedCards = [];
  selectedIndex = [];
  for (let i = 0; i < totalCards; i++) {
    let randomNum = Math.floor(Math.random() * (37));
    while (selectedIndex.indexOf(randomNum) >= 0) {
      randomNum = Math.floor(Math.random() * (37));
    }
    selectedIndex.push(randomNum);
    selectedCards.push(spongeBob[randomNum]);
  }
}

let gameOver = function () {
  selectedCards = [];
  isGameOver = true;
}

shuffle();


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    selectedCards
  };

  clickFriend = id => {
    if (clickedIndex.indexOf(id) < 0) {
      currentScore++;
      shuffle();
      console.log(selectedCards);
      this.setState({ selectedCards });
      clickedIndex.push(id);
      console.log(clickedIndex)
    }
    else {
      gameOver();
      this.setState({ selectedCards });
    }
  };
  
  refreshPage = () => {
    selectedCards = [];
    selectedIndex = [];
    clickedIndex = [];
    currentScore = 0;
    isGameOver = false;
    shuffle();
    this.setState({ selectedCards });
    // window.location.reload();
  }

  render() {
    if (isGameOver) {
      return (
        <Wrapper>
          <Title>SpongeBob Memory Game</Title>
          <GameOver score={currentScore} clickHandler={this.refreshPage}></GameOver>
        </Wrapper>
      );
    } else {
      return (
        <Wrapper>
          <Title>SpongeBob Memory Game</Title>
          <Instruction score={currentScore}></Instruction>
          {this.state.selectedCards.map(bob => (
            <Card
              clickFriend={this.clickFriend}
              id={bob.id}
              key={bob.id}
              image={bob.image}
            />
          ))}
        </Wrapper>
      );
    }

  }
}

export default App;
