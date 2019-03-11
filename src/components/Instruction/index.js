import React from "react";
import "./style.css";

function Instructions(props) {
  return <div>
            <p className="ins"><em>Click the SpongeBob that you have not clicked before. You lose if you click the same SpongeBob twice.</em></p>
            <p className="scoreDisplay">Your Score:<span id="scoreDisplay">{props.score}</span></p>
        </div>
}

export default Instructions;
