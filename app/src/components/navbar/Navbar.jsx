import React from 'react';
import "./navbar.css";
import { MenuItems } from './MenuItems';
import { listItems } from './listItems';

export const Navbar = () => {
  return (
    <ul className='navContainer'>
        {listItems.map((menu, index) => (
          (
            <MenuItems items={menu} key={index} />
          )
        ))}
    </ul>
  )
}

