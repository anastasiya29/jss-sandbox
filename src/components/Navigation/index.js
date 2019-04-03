import React from 'react';
import NavBar from './NavBar';

const NavItem = ({ item }) => (
  <a href={item.url}>{item.name}</a>
);

const Navigation = ({ fields }) => (
  <NavBar>
    {
      fields.data.search.results.items.map((item, i) =>
        <NavItem key={i} item={item.item} />)
    }
  </NavBar>
);

export default Navigation;
