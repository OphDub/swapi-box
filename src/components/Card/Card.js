import React from 'react';

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
      <h3>{element.name}</h3>
      <ul>
        {list}
      </ul>
    </article>
  )
}

export default Card;