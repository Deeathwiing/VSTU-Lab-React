import React, { Component } from "react";
import Items from "./Items";
import { BrowserRouter, Route } from "react-router-dom";
import News from "./News";
import Order from "./Order";
import NewsAndPromotions from "./NewsAndPromotions";
import Administration from "../Administration";
import "../Navbar";
import Warranty from "./Warranty";

const Section = props => {
  return (
    <section className="d-flex flex-column ml-1 p-2" id="section">
      <div>
        <Route path="/" component={News} />
        <Route path="/items" component={Items} />
        <Route path="/news" component={News} />
        <Route path="/order" component={Order} />
        <Route path="/newsAndPromotions" component={NewsAndPromotions} />
        <Route path="/administration" component={Administration} />
        <Route path="/warranty" component={Warranty} />
      </div>
    </section>
  );
};

export default Section;
