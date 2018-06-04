import React, { Component } from "react";
import moment from "moment-timezone";

class OraNera extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: "00:00",
      timeON: "ON...",
      ON: this.getON()
    };
  }

  getON() {
    const hour = 20;
    const minute = 15;
    const second = 0;
    const d = new Date();
    d.setHours(hour, minute, second);
    return {
      hour,
      minute,
      second,
      date: d,
      m: moment().tz(this.props.tz)
    };
  }

  updateTime() {
    const m = moment().tz(this.props.tz);
    const duration = moment.duration(m.diff(this.state.ON.m));
    const diffMinutes = duration.asMinutes();
    const digit = Math.floor(diffMinutes / this.state.ON.minute);
    const timeON = digit ? `ON${digit}` : "ON";
    const time = m.tz(this.props.tz).format("LLL");

    this.setState({
      time,
      timeON,
      ON: this.getON()
    });
  }

  componentDidMount() {
    this.clock = setInterval(this.updateTime.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clock);
  }

  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="card grey darken-3">
            <div className="card-content white-text">
              <span className="card-title">{this.props.tz}</span>
              <span>{this.state.timeON}</span>
              <br />
              <span>{this.state.time}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OraNera;
