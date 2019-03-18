import React, { Component } from "react";
import Items from "../Items";
import { BrowserRouter, Route } from "react-router-dom";
import News from "../News";
import Order from "../Order";
import NewsAndPromotions from "../NewsAndPromotions";
import Administration from "../Administration";

class Section extends Component {
  render() {
    return (
      <BrowserRouter>
        <section className="d-flex flex-column ml-1 p-2" id="section">
          <Route path="" component={News} />
          <Route path="/items" component={Items} />
          <Route path="/news" component={News} />
          <Route path="/order" component={Order} />
          <Route path="/newsAndPromotions" component={NewsAndPromotions} />
          <Route path="/administration" component={Administration} />
        </section>
      </BrowserRouter>
    );
  }
}

export default Section;
