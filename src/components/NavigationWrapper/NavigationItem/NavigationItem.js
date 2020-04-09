import React from 'react';

const NavigationItem = ({ link, name }) => (
  <li>
    <a href={link}>{name}</a>
  </li>
);

export default NavigationItem;
