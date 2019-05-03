import React from 'react';

import Aside from './Aside';
import Section from './section/Section';

const AsideSection = () => (
  <div className="aside-section container p-0 d-flex flex-row">
    <Aside />
    <Section />
  </div>
);

export default AsideSection;
