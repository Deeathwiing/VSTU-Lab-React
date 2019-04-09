import React from 'react';
import { Route } from 'react-router-dom';
import Items from './Items';
import News from './News';
import Order from './Order';
import NewsAndPromotions from './NewsAndPromotions';
import Warranty from './Warranty';
import LogIn from './LogIn';
import Registration from './Registration';
import AboutUs from './AboutUs';
import AdminRoute from './AdminRoute';
import EditProfile from './EditProfile';

const Section = props => (
  <section className="d-flex flex-column ml-1 p-2 bg-light" id="section">
    <div>
      <Route path="/" component={News} />

      <Route path="/news" component={News} />
      <Route path="/order" render={() => <Order state={props.state} />} />
      <Route path="/newsAndPromotions" component={NewsAndPromotions} />
      <AdminRoute state={props.state} dispatch={props.dispatch} path="/administration" />
      <Route path="/warranty" component={Warranty} />
      <Route path="/login" render={() => <LogIn state={props.state} dispatch={props.dispatch} />} />
      <Route
        path="/registration"
        render={() => <Registration state={props.state} dispatch={props.dispatch} />}
      />
      <Route path="/about" component={AboutUs} />
      <Route
        path="/editprofile"
        render={() => <EditProfile state={props.state} dispatch={props.dispatch} />}
      />
      <Route path="/items" render={() => <Items state={props.state} dispatch={props.dispatch} />} />
    </div>
  </section>
);

export default Section;
