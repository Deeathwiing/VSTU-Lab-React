import React from 'react';
import { Route } from 'react-router-dom';

import News from './News';
import Order from './Order';
import NewsAndPromotions from './newsAndPromotions';
import Warranty from './Warranty';

import AboutUs from './aboutUs';

import ItemsContainer from './Items/ItemsContainer';
import registrationContainer from './Registration/registrationContainer';
import LoginContainer from './LogIn/loginContainer';
import AdminRouteContainer from './Administration/adminRouteContainer';
import EditProfileContainer from './editProfile/editProfileContainer';

const Section = () => (
  <section className="d-flex flex-column ml-1 p-2 bg-light" id="section">
    <div>
      <Route path="/" component={News} />

      <Route path="/news" component={News} />
      <Route path="/order" component={Order} />
      <Route path="/newsAndPromotions" component={NewsAndPromotions} />
      <AdminRouteContainer path="/administration" />
      <Route path="/warranty" component={Warranty} />
      <Route path="/login" component={LoginContainer} />
      <Route path="/registration" component={registrationContainer} />
      <Route path="/about" component={AboutUs} />
      <Route path="/editprofile" component={EditProfileContainer} />
      <Route path="/items" component={ItemsContainer} />
    </div>
  </section>
);

export default Section;
