import React from 'react';
import './CardContainer.css';
import Card from '../Card/Card';
import { string, object, func, arrayOf } from 'prop-types';

const CardContainer = ({ type, data, saveFavorite }) => {
  let renderedCards;

  if (data.length === 0) {
    renderedCards = (
      <div className={`loading-${type}`}>
        <h3> No {type} to show </h3>
      </div>
    );
  } else {
    renderedCards = data.map((element, index) => {
      return (
        <Card element={element}
          type={type}
          key={`${Date.now()}${index}`}
          saveFavorite={saveFavorite}/>
      );
    });
  }

  return (
    <section className="card-container">
      {renderedCards}
    </section>
  );
};

CardContainer.propTypes = {
  type: string.isRequired,
  data: arrayOf(object).isRequired,
  saveFavorite: func.isRequired,
};

export default CardContainer;