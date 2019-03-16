import React, { Component } from "react";
import Aside from "./Aside";
import Section from "./Section";

class Aside_Section extends Component {
  render() {
    return (
      <div className="container p-0 d-flex flex-row">
        <Aside />
        <Section />
      </div>
    );
  }
}

export default Aside_Section;
