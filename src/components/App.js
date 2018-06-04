import React, { Component } from "react";
import Header from "./Header";
import OraNera from "./OraNera";
import Footer from "./Footer";
import "../../node_modules/materialize-css/dist/css/materialize.min.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <OraNera tz={"America/New_York"} />
        <OraNera tz={"Europe/Rome"} />
        <OraNera tz={"Asia/Tokyo"} />
        <Footer />
      </div>
    );
  }
}

export default App;
