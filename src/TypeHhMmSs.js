import React, { Component } from "react";
import CountdownTypeHhMmSs from "./CountdownTypeHhMmSs";
import ControlButtons from "./ControlButtons";
import "./scss/hhmmss.css";

// Import Bootstrap
import { Button } from "reactstrap";

// Import Context
import ColorContext from "./colorContext";

var valueHour, valueMin, valueSec, toTalSeconds, pauseResume;

class TypeHhMmSs extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePauseResume = this.handlePauseResume.bind(this);
    this.handleRestart = this.handleRestart.bind(this);

    this.state = {
      showClock: 0,
      pause: "",
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    valueHour = Number(document.getElementsByTagName("select")[1].value);
    valueMin = Number(document.getElementsByTagName("select")[2].value);
    valueSec = Number(document.getElementsByTagName("select")[3].value);

    if (valueSec !== 0 || valueMin !== 0 || valueHour !== 0) {
      this.setState({ showClock: 1 });
      toTalSeconds = valueHour * 3600 + valueMin * 60 + valueSec;
      document.getElementById("formHhMmSs").style.display = "none";
    } else {
      this.setState({ showClock: 2 });
    }

    this.setState({
      pause: false,
    });
  }

  handlePauseResume() {
    pauseResume = document.getElementById("pause-resume").innerText;
    if (pauseResume === "Pause") {
      this.setState({ pause: true });
      document.getElementById("pause-resume").innerText = "Resume";
    } else if (pauseResume === "Resume") {
      this.setState({ pause: false });
      document.getElementById("pause-resume").innerText = "Pause";
    }
  }

  handleRestart() {
    this.setState({
      showClock: 0,
      pause: "",
    });

    document.getElementsByTagName("select")[1].value = 0;
    document.getElementsByTagName("select")[2].value = 0;
    document.getElementsByTagName("select")[3].value = 0;
    document.getElementById("formHhMmSs").style.display = "block";
  }

  render() {
    let _pause = this.state.pause;

    var hourArray = [],
      minArray = [],
      secArray = [];

    for (let i = 0; i < 24; i++) {
      let hour = i;
      hourArray.push(hour);
    }
    const hourList = hourArray.map((hour) => (
      <option key={hour} value={hour}>
        {hour}
      </option>
    ));

    for (let j = 0; j < 60; j++) {
      let min = j;
      minArray.push(min);
      secArray.push(min);
    }
    const minList = minArray.map((min) => (
      <option key={min} value={min}>
        {min}
      </option>
    ));
    const secList = secArray.map((sec) => (
      <option key={sec} value={sec}>
        {sec}
      </option>
    ));

    const _showClock = this.state.showClock;

    let clockComponent;
    if (_showClock === 1) {
      clockComponent = (
        <React.Fragment>
          {/* // Use React Context API to consume color state value */}
          <ColorContext.Consumer>
            {(context) => (
              <CountdownTypeHhMmSs
                totalSec={toTalSeconds}
                pause={_pause}
                color={context}
              />
            )}
          </ColorContext.Consumer>
          <ControlButtons
            onClickPauseResume={this.handlePauseResume}
            onClickRestart={this.handleRestart}
          />
        </React.Fragment>
      );
    } else if (_showClock === 2) {
      clockComponent = <h3>Please set up timer</h3>;
    }

    return (
      <div className="hh-mm-yyyy type-wrapper">
        <form id="formHhMmSs" onSubmit={this.handleSubmit}>
          <h3>Set Hour/Minute/Second</h3>

          <div className="select-input-wrapper">
            <select>{hourList}</select>

            <select>{minList}</select>

            <select>{secList}</select>

            <Button id="start" type="submit" outline color="secondary">
              Start
            </Button>
          </div>
        </form>

        {clockComponent}
      </div>
    );
  }
}

export default TypeHhMmSs;
