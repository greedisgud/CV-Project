import React, { Component } from "react";

class Education extends Component {
  constructor() {
    super();
    this.state = {
      startDate: "",
      endDate: "",
      degree: "",
      school: "",
      gpa: "",
    };
  }

  handleStartDateChange = (e) => {
    this.setState({ startDate: e.target.value });
  };

  handleEndDateChange = (e) => {
    this.setState({ endDate: e.target.value });
  };

  handleDegreeChange = (e) => {
    this.setState({ degree: e.target.value });
  };
}
