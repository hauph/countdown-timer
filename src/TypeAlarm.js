import React, { Component } from "react";
import { Button } from "reactstrap";
import alarm from "./media/Alarm.mp3";

let valueHour, valueMin, interval;
let showNotification = true;

class TypeAlarm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.tick = this.tick.bind(this);

    this.state = {
      disable: false,
      hour: null,
      min: null,
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const { disable } = this.state;

    if (!disable) {
      valueHour = Number(document.getElementsByTagName("select")[1].value);
      valueMin = Number(document.getElementsByTagName("select")[2].value);

      this.setState({
        disable: true,
        hour: valueHour,
        min: valueMin,
      });

      interval = setInterval(this.tick, 1000);
    } else {
      document.getElementById("alarm").pause();
      clearInterval(interval);
      this.setState({
        disable: false,
        hour: null,
        min: null,
      });
    }
  }

  tick() {
    const d = new Date();
    const curr_hour = d.getHours();
    const curr_min = d.getMinutes();
    const { hour, min } = this.state;

    if (curr_hour === hour && curr_min === min) {
      document.getElementById("alarm").play();

      if ("serviceWorker" in navigator && showNotification) {
        showNotification = false;

        const options = {
          body: "Alarm is ringing!!!",
          vibrate: [100, 50, 200],
          renotify: true,
          tag: "alarm-notification",
          actions: [
            {
              action: "cancel",
              title: "Turn off",
              icon: "",
            },
          ],
        };

        navigator.serviceWorker.ready.then((swreg) => {
          swreg.showNotification("Alarm clock", options);
        });
      }
    }
  }

  componentWillUnmount() {
    clearInterval(interval);
  }

  render() {
    var hourArray = [],
      minArray = [];

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
    }
    const minList = minArray.map((min) => (
      <option key={min} value={min}>
        {min}
      </option>
    ));

    const { disable } = this.state;

    return (
      <div className="hh-mm-yyyy type-wrapper">
        <form id="formHhMmSs" onSubmit={this.handleSubmit}>
          <h3>Set Hour/Minute</h3>

          <div className="select-input-wrapper">
            <select disabled={disable}>{hourList}</select>

            <select disabled={disable}>{minList}</select>

            <Button id="start" type="submit" outline color="secondary">
              {disable ? "Off" : "On"}
            </Button>
          </div>
        </form>
        <audio id="alarm" src={alarm} />
      </div>
    );
  }
}

export default TypeAlarm;
