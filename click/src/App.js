import React, { Component } from "react";
import gods from "./gods.json";
import GodCard from "./components/GodCard/GodCard"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ScoreDiv from "./components/ScoreDiv/ScoreDiv"
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      highScore: 0,
      score: 0,
      gods
    }
  }
  
  shuffleGods = (newGods) => {
    newGods.sort( () => Math.random() - 0.5);
  }

  updateScore = () => {
    this.setState({ score: this.state.score + 1 });
  }

  updateHighScore = () => {
    this.setState({ highScore: this.state.highScore + 1 });
  }

  winner = () => {
    // resetGame()
  }

  resetGame = () => {
    this.setState({ score: 0})
    let resetGods = this.state.gods.map(god => {
      god.clicked=false
      return god
    })
    this.setState({gods: resetGods})
  }



  handleClick = (id) => {
    let newGods = this.state.gods.map(god => {

      if (god.id === id) {
        if (god.clicked === false) {
          this.updateScore()
          if (this.state.score >= this.state.highScore) {
            this.updateHighScore()
            if (this.state.highScore === this.state.gods.length) {
              this.winner()
            }
          }
          god.clicked = true
         
        } else {
          this.resetGame()
        }
      }
      return god
    })
    this.shuffleGods(newGods)
    console.log(newGods)
    this.setState({ dogs: newGods })
  }

  



  render() {
    return (<div>
      <Header />
      <ScoreDiv 
      score={this.state.score}
      highScore={this.state.highScore} />
      <GodCard 
      gods={this.state.gods}
      onClick={this.handleClick} />
      <Footer />
    </div>)
  }
}

export default App;
