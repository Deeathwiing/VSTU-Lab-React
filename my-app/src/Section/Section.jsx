import React from "react";
import Items from "./Items";
import { Route } from "react-router-dom";
import News from "./News";
import Order from "./Order";
import NewsAndPromotions from "./NewsAndPromotions";
import "../Navbar";
import Warranty from "./Warranty";
import LogIn from "./LogIn";
import Registration from "./Registration";
import AboutUs from "./AboutUs";
import { AdminRoute } from "../AdminRoute";
import EditProfile from "./EditProfile";

const Section = () => {
  return (
    <section className="d-flex flex-column ml-1 p-2 bg-light" id="section">
      <div>
        <Route path="/" component={News} />

        <Route path="/news" component={News} />
        <Route path="/order" component={Order} />
        <Route path="/newsAndPromotions" component={NewsAndPromotions} />
        <AdminRoute path="/administration" />
        <Route path="/warranty" component={Warranty} />
        <Route path="/login" component={LogIn} />
        <Route path="/registration" component={Registration} />
        <Route path="/about" component={AboutUs} />
        <Route path="/editprofile" component={EditProfile} />
        <Route path="/items" component={Items} />
      </div>
    </section>
  );
};

export default Section;
