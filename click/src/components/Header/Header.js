import React from "react";
import "./Header.css"

function Header(props) {
    return <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <h1 className="display-4">Smite Memory Click Game!</h1>
            <p className="lead">Click on the image to earn points, but dont click on a god mulitple times!</p>
            {/* <div>Score: {props.score}</div>
            <div>High Score: {props.highScore}</div> */}
        </div>
    </div>
}

export default Header;