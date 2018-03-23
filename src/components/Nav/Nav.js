import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';
import { func } from 'prop-types';

const Nav = ({ getData }) => {
  return (
    <section className="nav-section">
      <label for="reveal-email" class="btn"> Menu </label>
      <input type="checkbox" id="reveal-email" role="button"></input>
      <nav id="nav-category" className="categories">
        <NavLink to='/people' className="nav-category-links">
          <button onClick={() => getData('people')}>
            People
          </button>
        </NavLink>
        <NavLink to='/planets' className="nav-category-links">
          <button onClick={() => getData('planets')}>
            Planets
          </button>
        </NavLink>
        <NavLink to='/vehicles' className="nav-category-links">
          <button onClick={() => getData('vehicles')}>
            Vehicles
          </button>
        </NavLink>
      </nav>
    </section>
  );
};

Nav.propTypes = {
  getData: func.isRequired
};

export default Nav;