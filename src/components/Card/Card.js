import React from 'react';
import './Card.css';
import { object, func, string } from 'prop-types';

const Card = ({ type, element, saveFavorite }) => {
  const keys = Object.keys(element).filter((key)=>
    key !== 'name' && key !== 'favorited'
  );
  const cardClass = element.favorited ? 'favorited' : '';

  const list = keys.map((key, index) => {
    let info = element[key];
    if (typeof element[key] === 'object') {
      info = element[key].join(', ');
    }

    return (
      <li key={`${Date.now()}${index}`}>
        <span className="card-li">{key}</span>: {info}
      </li>
    );
  });

  return (
    <article className="card">
      <div className={type}>
        <h3>{element.name}</h3>
        <button onClick={() => saveFavorite(element)}
          className={cardClass}>
          Favorite
        </button>
      </div>
      <ul className="card-info">
        {list}
      </ul>
    </article>
  );
};

Card.propTypes = {
  type: string.isRequired,
  element: object.isRequired,
  saveFavorite: func.isRequired,
};

export default Card;