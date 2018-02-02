import React from 'react';
import './Card.scss';

const Card = ({element}) => {
  const keys = Object.keys(element).filter((key)=> key !== 'name')

  const list = keys.map((key, index) => {
    let info = element[key];

    if (typeof element[key] === 'object') {
      info = element[key].join(', ')
    }

    return (
      <li key={`${Date.now()}${index}`}>
        {key}: {info}
      </li>
    )
  })

  return(
    <article className="card">
      <div>
        <h3>{element.name}</h3>
        <button>Favorite</button>
      </div>
      <ul>
        {list}
      </ul>
    </article>
  )
}

export default Card;