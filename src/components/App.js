import React, { Component } from "react";
import Header from "./Header";
import OraNera from "./OraNera";
import Footer from "./Footer";
import "../../node_modules/materialize-css/dist/css/materialize.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app container">
        <Header />
        <div className="app-content">
          <OraNera tz={"America/New_York"} />
          <OraNera tz={"Europe/Rome"} />
          <OraNera tz={"Asia/Tokyo"} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
