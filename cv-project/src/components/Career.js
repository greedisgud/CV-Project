import React, { Component } from "react";
import uniqid from "uniqid";
import HandleCareerInputs from "./HandleCareerInputs";

class Career extends Component {
  constructor() {
    super();

    this.state = {
      careerInfo: { text: "", id: uniqid() },
      careerInputs: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      careerInfo: {
        text: e.target.value,
        id: this.state.careerInfo.id,
      },
    });
  };

  handleCareerInput = (e) => {
    e.preventDefault();
    this.setState({
      careerInputs: this.state.careerInputs.concat(this.state.careerInfo),
      careerInfo: { text: "", id: uniqid() },
    });
  };

  render() {
    const { careerInfo, careerInputs } = this.state;

    return (
      <div>
        <form onSubmit={this.handleCareerInput}>
          <label htmlFor="careerInput">Enter Work History</label>
          <input
            onChange={this.handleChange}
            value={careerInfo.text}
            type="text"
            id="careerInput"
            placeholder="Enter work history"
          />
          <button type="submit">Add to CV</button>
        </form>
        <HandleCareerInputs careerInputs={careerInputs} />
      </div>
    );
  }
}

export default Career;
