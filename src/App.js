import React, { Component } from "react";
import "../node_modules/materialize-css/dist/css/materialize.min.css";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: "00:00:00",
      amPm: "am"
    };
  }

  takeTwelve(n) {
    if (n > 12) {
      return n - 12;
    } else {
      return n;
    }
  }

  addzero(n) {
    if (n < 10) {
      return `0${n}`;
    } else {
      return n;
    }
  }

  updateTime() {
    const takeTwelve = n => (n > 12 ? n - 12 : n);
    const addZero = n => (n < 10 ? "0" + n : n);

    let d, h, m, s, t, amPm;
    d = new Date();
    h = addZero(takeTwelve(d.getHours()));
    m = addZero(d.getMinutes());
    s = addZero(d.getSeconds());
    t = `${h}:${m}:${s}`;
    amPm = d.getHours() >= 12 ? "pm" : "am";

    this.setState({
      time: t,
      amPm: amPm
    });
  }

  componentDidMount() {
    this.clock = setInterval(this.updateTime.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clock);
  }

  // <i className="material-icons">done</i>
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">{this.state.time}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
