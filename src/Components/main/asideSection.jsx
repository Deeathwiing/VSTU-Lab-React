import React from 'react';

import Aside from './aside';
import Section from './section/section';

const AsideSection = () => (
  <div className="aside-section container p-0 d-flex flex-row">
    <Aside />
    <Section />
  </div>
);

export default AsideSection;
