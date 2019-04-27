import React from 'react';
import { Route } from 'react-router-dom';

import NewsAndPromotions from './newsAndPromotions';
import Warranty from './warranty';

import AboutUs from './aboutUs';

import ItemsContainer from './items/itemsContainer';
import EditProfileContainer from './editProfile/editProfileContainer';
import News from './news';
import Order from './order';
import AdminRouteContainer from './administration/adminRouteContainer';
import registrationContainer from './registration/registrationContainer';
import LoginContainer from './logIn/loginContainer';

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
