import React from "react";
import "./style.css";

function GameOver(props) {
  return <div>
            <p>Game Over!</p>
            <p>Your Final Score:<span id="scoreDisplay">{props.score}</span></p>
            <button type="button" class="btn btn-primary"  onClick={()=> props.clickHandler()}>Play Again</button>
        </div>
}

export default GameOver;
