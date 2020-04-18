import React from "react"
import "./ScoreDiv.css"

function ScoreDiv(props) {
    return (<div>
        <div className="container score">
          <div>Score: {props.score}</div>
            <div>High Score: {props.highScore}</div>
        </div>
    </div>
    )
};

export default ScoreDiv;