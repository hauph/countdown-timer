import React, { Component } from "react";
import DatePicker from "react-date-picker";
import CountdownTypeMmDdYyyy from "./CountdownTypeMmDdYyyy";
import ControlButtons from "./ControlButtons";
import "./scss/mmddyyyy.css";

// Import Bootstrap
import { Button } from "reactstrap";

// Import Context
import ColorContext from "./colorContext";

var pauseResume, toTalSeconds;

class TypeMmDdYyyy extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePauseResume = this.handlePauseResume.bind(this);
    this.handleRestart = this.handleRestart.bind(this);

    this.state = {
      date: new Date(),
      showClock: 0,
      pause: "",
    };
  }

  onChange(date) {
    this.setState({ date: date });
  }

  handleSubmit(e) {
    e.preventDefault();
    let date = this.state.date;
    if (date > new Date()) {
      this.setState({ showClock: 1 });
      let getTimeDate = date.getTime();
      let getTimeNow = new Date().getTime();
      toTalSeconds = Math.floor((getTimeDate - getTimeNow) / 1000);
      document.getElementById("formMmDdYyyy").style.display = "none";
    } else {
      this.setState({ showClock: 2 });
    }
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
      date: new Date(),
      showClock: 0,
      pause: "",
    });

    document.getElementById("formMmDdYyyy").style.display = "block";
  }

  render() {
    const _pause = this.state.pause;
    const _showClock = this.state.showClock;
    let clockComponent;
    if (_showClock === 1) {
      clockComponent = (
        <React.Fragment>
          {/* // Use React Context API to consume color state value */}
          <ColorContext.Consumer>
            {(context) => (
              <CountdownTypeMmDdYyyy
                color={context}
                totalSec={toTalSeconds}
                pause={_pause}
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
      clockComponent = (
        <h3>Please set up timer. Selected date must stay ahead today.</h3>
      );
    }

    return (
      <div className="mm-dd-yyyy type-wrapper">
        <form id="formMmDdYyyy" onSubmit={this.handleSubmit}>
          <h3>Set Month/Day/Year</h3>
          <DatePicker value={this.state.date} onChange={this.onChange} />
          <Button id="start" type="submit" outline color="secondary">
            Start
          </Button>
        </form>

        {clockComponent}
      </div>
    );
  }
}

export default TypeMmDdYyyy;
