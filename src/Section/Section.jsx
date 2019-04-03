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

const Section = props => {
  return (
    <section className="d-flex flex-column ml-1 p-2 bg-light" id="section">
      <div>
        <Route path="/" component={News} />

        <Route path="/news" component={News} />
        <Route path="/order" render={() => <Order state={props.state} />} />
        <Route path="/newsAndPromotions" component={NewsAndPromotions} />
        <AdminRoute
          state={props.state}
          addItems={props.addItems}
          deleteItems={props.deleteItems}
          deleteUser={props.deleteUser}
          path="/administration"
        />
        <Route path="/warranty" component={Warranty} />
        <Route
          path="/login"
          render={() => <LogIn state={props.state} logIn={props.logIn} />}
        />
        <Route
          path="/registration"
          render={() => (
            <Registration state={props.state} addUser={props.addUser} />
          )}
        />
        <Route path="/about" component={AboutUs} />
        <Route
          path="/editprofile"
          render={() => <EditProfile state={props.state} />}
        />
        <Route path="/items" render={() => <Items state={props.state} />} />
      </div>
    </section>
  );
};

export default Section;
