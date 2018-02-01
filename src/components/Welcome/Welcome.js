import React from 'react';

const Welcome = ( film ) => {
  return(
    <article>
      <h4>{film.crawl}</h4>
      <h3>{film.title}</h3>
      <h4>{film.releaseDate}</h4>
    </article>
  )
}

export default Welcome;