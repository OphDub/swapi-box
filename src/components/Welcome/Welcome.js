import React from 'react';

const Welcome = ({ film }) => {
  return(
    <article className="opening-crawl">
      <h4 className="crawl-body">{film.crawl}</h4>
      <h3 className="crawl-title">{film.title}</h3>
      <h4 className="crawl-release-date">{film.releaseDate}</h4>
    </article>
  )
}

export default Welcome;