import React from 'react';
import Card from '../Card/Card';

const Container = ({ type, data }) => {
  let renderedCards

  if(!data) {
    renderedCards = (
      <div>
        LOADING...
      </div>
    )
  } else {
    renderedCards = data.map((element, index) => {
      return (
        <Card element={element}
              type={type}
              key={`${Date.now()}${index}`} />
      )
    })
  }

  return(
    <section className="card-container">
      {renderedCards}
    </section>
  )
}

export default Container;