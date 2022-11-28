import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from './dropdown';


export const MenuItems = ({ items }) => {
    const [dropdown, setDropDown] = useState(false);
  return (
    <li className="menu-items" onMouseEnter={()=>setDropDown(true)} onMouseLeave={()=>setDropDown(false)}>
      {items.submenu ? (
        <>
          <Link className='link' to={items.to} type="button" aria-haspopup="menu">
            {items.title}
          </Link>
          {dropdown && <Dropdown submenus={items.submenu} />}
          
        </>
      ) : (
        <Link  className='link' to={items.to}>{items.title}</Link>
      )}
    </li>
  )
}
