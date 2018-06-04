import React, { Component } from "react";
import moment from "moment-timezone";

class OraNera extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      date: d
    };
  }

  updateTime() {
    // const m = moment()
    const d = new Date();
    const diffMinutes = (d - this.state.ON.date) / 1000 / 60;
    const digit = Math.floor(diffMinutes / this.state.ON.minute);
    const timeON = `ON${digit}`;

    // const aaa = moment().toDate()
    // console.log(m)

    this.setState({
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
              <span className="card-title">{this.state.timeON}</span>
              <span className="">
                {moment().format("MMMM Do YYYY, h:mm:ss a")}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OraNera;
