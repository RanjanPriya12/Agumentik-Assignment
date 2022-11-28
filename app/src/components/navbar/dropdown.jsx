import React from 'react';
import "./navbar.css";

export const Dropdown = ({ submenus }) => {
    return (
        <ul className='menuItems'>
          {submenus.map((submenu, index) => (
            <li key={index} className="dropdownItem">
            <div>{submenu.icon}</div>
            <div>
                <h5>{submenu.heading}</h5>
                <p>{submenu.description}</p>
            </div>
            <div>{submenu.rightArrow}</div>
        </li>
          ))}
        </ul>
    );
}
