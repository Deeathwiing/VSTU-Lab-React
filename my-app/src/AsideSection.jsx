import React, { Component } from "react";
import Aside from "./Aside";
import Section from "./Section/Section";

const AsideSection = props => {
  return (
    <div className="container p-0 d-flex flex-row">
      <Aside />
      <Section state={props.state} />
    </div>
  );
};

export default AsideSection;
