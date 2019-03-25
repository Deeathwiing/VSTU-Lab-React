import React from "react";
import Items from "./Items";
import { Route } from "react-router-dom";
import News from "./News";
import Order from "./Order";
import NewsAndPromotions from "./NewsAndPromotions";
import Administration from "../Administration";
import "../Navbar";
import Warranty from "./Warranty";
import LogIn from "./LogIn";
import Registration from "./Registration";
import AboutUs from "./AboutUs";
import { AdminRoute } from "../AdminRoute";

const Section = () => {
  return (
    <section className="d-flex flex-column ml-1 p-2 bg-light" id="section">
      <div>
        <Route path="/" component={News} />
        <Route path="/items" component={Items} />
        <Route path="/news" component={News} />
        <Route path="/order" component={Order} />
        <Route path="/newsAndPromotions" component={NewsAndPromotions} />
        <AdminRoute path="/administration" component={Administration} />
        <Route path="/warranty" component={Warranty} />
        <Route path="/login" component={LogIn} />
        <Route path="/registration" component={Registration} />
        <Route path="/about" component={AboutUs} />
      </div>
    </section>
  );
};

export default Section;
