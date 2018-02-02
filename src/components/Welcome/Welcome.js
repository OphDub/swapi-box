import React from 'react';

const Welcome = ({ film }) => {
  console.log('welcome', film)
  return(
    <article className="opening-crawl">
      <h4>{film.crawl}</h4>
      <h3>{film.title}</h3>
      <h4>{film.releaseDate}</h4>
    </article>
  )
}

export default Welcome;