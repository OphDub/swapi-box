import React from 'react';
import './Card.scss';
import { object, func } from 'prop-types';

const Card = ({ element, saveFavorite }) => {
  const keys = Object.keys(element).filter((key)=> key !== 'name');

  const list = keys.map((key, index) => {
    let info = element[key];

    if (typeof element[key] === 'object') {
      info = element[key].join(', ');
    }

    return (
      <li key={`${Date.now()}${index}`}>
        {key}: {info}
      </li>
    );
  });

  return (
    <article className="card">
      <div>
        <h3>{element.name}</h3>
        <button onClick={() => saveFavorite(element)}>Favorite</button>
      </div>
      <ul>
        {list}
      </ul>
    </article>
  );
};

Card.propTypes = {
  element: object.isRequired,
  saveFavorite: func.isRequired,
};

export default Card;