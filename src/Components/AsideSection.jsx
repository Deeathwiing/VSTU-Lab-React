import React from 'react';
import Aside from './Aside';
import Section from './Section/Section';

const AsideSection = props => (
  <div className="aside-section container p-0 d-flex flex-row">
    <Aside state={props.state} />
    <Section state={props.state} dispatch={props.dispatch} />
  </div>
);

export default AsideSection;
