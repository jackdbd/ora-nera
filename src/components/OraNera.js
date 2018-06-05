import React, { Component } from "react";
import moment from "moment-timezone";
import { getRealTime } from "../utils";

class OraNera extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      realTime: "ON",
      fakeTime: "00:00."
    };
  }

  updateTime() {
    const m = moment().tz(this.props.tz);
    const date = m.format("LL");
    const realTime = getRealTime(m, this.props.tz);
    // const fakeTime = m.tz(this.props.tz).format("LTS");
    const fakeTime = m.format("LTS");

    this.setState({
      date,
      realTime,
      fakeTime
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
              <span>{this.state.date}</span>
              <br />
              <span>Real Time: {this.state.realTime}</span>
              <br />
              <span>Fake Time: {this.state.fakeTime}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OraNera;
