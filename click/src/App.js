import React, { Component } from "react";
import gods from "./gods.json";
// import GodCard from "./components/GodCard"
import Header from "./components/Header/Header";
// import Footer from "./components/Footer";
class App extends Component {
  render() {
    return (<div>
      <Header score={this.state.score}
      highscore={this.state.highScore}
      />
      {/* <GodCard /> */}
      {/* <Footer /> */}
    </div>)
  }
}

export default App;
