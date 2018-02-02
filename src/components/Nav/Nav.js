import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = ({ getData }) => {
  return(
    <nav>
      <button onClick={() => getData('people')}>
        <NavLink to='/people'>People</NavLink>
      </button>
      <button onClick={() => getData('planets')}>
        <NavLink to='/planets'>Planets</NavLink>
      </button>
      <button onClick={() => getData('vehicles')}>
        <NavLink to='/vehicles'>Vehicles</NavLink>
      </button>
    </nav>
  )
}

export default Nav;