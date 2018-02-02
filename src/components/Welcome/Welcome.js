import React from 'react';

const Welcome = ( film ) => {
  console.log(film)
  return(
    <article>
      <h1>I am welcome</h1>
      <h4>{film.crawl}</h4>
      <h3>{film.title}</h3>
      <h4>{film.releaseDate}</h4>
    </article>
  )
}

export default Welcome;