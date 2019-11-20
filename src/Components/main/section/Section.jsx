import React from 'react';
import { Route } from 'react-router-dom';

import NewsAndPromotions from './NewsAndPromotions';
import Warranty from './Warranty';

import AboutUs from './AboutUs';

import EditProfileContainer from '../../../containers/EditProfileContainer';
import News from './News';
import Order from './Order';
import AdminRouteContainer from '../../../containers/AdminRouteContainer';
import registrationContainer from '../../../containers/RegistrationContainer';
import LoginContainer from '../../../containers/LoginContainer';
import imgLoading from '../../../public/images/gearLoading.svg';

// eslint-disable-next-line max-len
const ItemsContainer = React.lazy(() =>
  import('../../../containers/ItemsContainer'));

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

      <Route
        path="/items"
        render={() => (
          <React.Suspense fallback={<img alt="Loading..." src={imgLoading} />}>
            <ItemsContainer />
          </React.Suspense>
        )}
      />
    </div>
  </section>
);

export default Section;
