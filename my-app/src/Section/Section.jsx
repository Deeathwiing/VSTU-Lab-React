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
import AdminTable from "./AdminTable";
import ItemsAdmin from "./ItemsAdmin";
import AddItems from "./AddItems";
import AllItemsAdmin from "./AllItemsAdmin";

const Section = () => {
  return (
    <section className="d-flex flex-column ml-1 p-2 bg-light" id="section">
      <div>
        <Route path="/" component={News} />
        <Route path="/items" component={Items} />
        <Route path="/news" component={News} />
        <Route path="/order" component={Order} />
        <Route path="/newsAndPromotions" component={NewsAndPromotions} />
        <Route path="/administration" component={Administration} />
        <Route path="/warranty" component={Warranty} />
        <Route path="/login" component={LogIn} />
        <Route path="/registration" component={Registration} />
        <Route path="/about" component={AboutUs} />
        <Route path="/administration/admintable" component={AdminTable} />
        <Route path="/administration/itemsadmin" component={ItemsAdmin} />
        <Route
          path="/administration/itemsadmin/additems"
          component={AddItems}
        />
        <Route
          path="/administration/itemsadmin/allitems"
          component={AllItemsAdmin}
        />
      </div>
    </section>
  );
};

export default Section;
