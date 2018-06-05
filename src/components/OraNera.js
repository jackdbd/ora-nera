import React, { Component } from "react";
import moment from "moment-timezone";
import { getRealTime } from "../utils";

class OraNera extends Component {
  constructor(props) {
    super(props);
    this.state = {
      realTime: "ON",
      fakeTime: "00:00."
    };
  }

  updateTime() {
    const m = moment().tz(this.props.tz);
    const realTime = getRealTime(m, this.props.tz);
    const fakeTime = m.tz(this.props.tz).format("LLL");

    this.setState({
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
              <span>{this.state.realTime}</span>
              <br />
              <span>{this.state.fakeTime}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OraNera;
