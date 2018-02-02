import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = ({getData, handlePeopleData, handlePlanetsData, handleVehiclesData}) => {
  return(
    <nav>
      <button onClick={handlePeopleData}>
        <NavLink to='/people'>People</NavLink>
      </button>
      <button onClick={handlePlanetsData}>
        <NavLink to='/planets'>Planets</NavLink>
      </button>
      <button onClick={handleVehiclesData}>
        <NavLink to='/vehicles'>Vehicles</NavLink>
      </button>
    </nav>
  )
}

export default Nav;