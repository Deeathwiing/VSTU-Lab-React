import React from 'react';
import { Route } from 'react-router-dom';

import News from './News';
import Order from './Order';
import NewsAndPromotions from './newsAndPromotions';
import Warranty from './Warranty';

import AboutUs from './aboutUs';
import AdminRoute from './adminRoute';
import EditProfile from './editProfile';
import ItemsContainer from './Administration/Items/ItemsContainer';
import registrationContainer from './Registration/registrationContainer';
import LoginContainer from './LogIn/loginContainer';

const Section = props => (
  <section className="d-flex flex-column ml-1 p-2 bg-light" id="section">
    <div>
      <Route path="/" component={News} />

      <Route path="/news" component={News} />
      <Route path="/order" render={() => <Order />} />
      <Route path="/newsAndPromotions" component={NewsAndPromotions} />
      <AdminRoute state={props.state} dispatch={props.dispatch} path="/administration" />
      <Route path="/warranty" component={Warranty} />
      <Route path="/login" render={() => <LoginContainer />} />
      <Route path="/registration" component={registrationContainer} />
      <Route path="/about" component={AboutUs} />
      <Route
        path="/editprofile"
        render={() => <EditProfile state={props.state} dispatch={props.dispatch} />}
      />
      <Route path="/items" component={ItemsContainer} />
    </div>
  </section>
);

export default Section;
