import React, { Component } from "react";
import Info from "./components/Info";
import Bio from "./components/Bio";
import Education from "./components/Education";

class App extends Component {
  render() {
    return (
      <div id="cv">
        <Bio />
        <Info />
        <Education />
      </div>
    );
  }
}

export default App;
