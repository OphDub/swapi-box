import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return(
    <nav>
      <button><NavLink to='/people'>People</NavLink></button>
      <button><NavLink to='/planets'>Planets</NavLink></button>
      <button><NavLink to='/vehicles'>Vehicles</NavLink></button>
    </nav>
  )
}

export default Nav;