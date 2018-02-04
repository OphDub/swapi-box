import React from 'react';
import { NavLink } from 'react-router-dom';
import { func } from 'prop-types';

const Nav = ({ getData }) => {
  return (
    <nav>
      <NavLink to='/people'>
        <button onClick={() => getData('people')}>
          People
        </button>
      </NavLink>
      <NavLink to='/planets'>
        <button onClick={() => getData('planets')}>
          Planets
        </button>
      </NavLink>
      <NavLink to='/vehicles'>
        <button onClick={() => getData('vehicles')}>
          Vehicles
        </button>
      </NavLink>
    </nav>
  );
};

Nav.propTypes = {
  getData: func.isRequired
};

export default Nav;