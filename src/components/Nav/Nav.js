import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';
import { func } from 'prop-types';

const Nav = ({ getData }) => {
  return (
    <section className="nav-section">
      <label htmlFor="reveal-email" className="btn"> Menu </label>
      <input type="checkbox" id="reveal-email" role="button"></input>
      <nav id="nav-category" className="categories">
        <NavLink to='/people' className="nav-category-links">
          <button onClick={() => getData('people')} className="nav-category-btns">
            People
          </button>
        </NavLink>
        <NavLink to='/planets' className="nav-category-links">
          <button onClick={() => getData('planets')} className="nav-category-btns">
            Planets
          </button>
        </NavLink>
        <NavLink to='/vehicles' className="nav-category-links">
          <button onClick={() => getData('vehicles')} className="nav-category-btns">
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