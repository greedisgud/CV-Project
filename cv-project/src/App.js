import React, { Component } from "react";
import Info from "./components/Info";
import Bio from "./components/Bio";

class App extends Component {
  render() {
    return (
      <div id="cv">
        <Bio />
        <Info />
      </div>
    );
  }
}

export default App;
