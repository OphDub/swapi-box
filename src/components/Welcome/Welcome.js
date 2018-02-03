import React from 'react';
import './Welcome.scss';
import { object } from 'prop-types';

const Welcome = ({ film }) => {
  return (
    <div className="fade">
      <section className="star-wars">
        <article className="crawl">
          <h4 className="crawl-body">{film.crawl}</h4>
          <h3 className="crawl-title">{film.title}</h3>
          <h4 className="crawl-release-date">{film.releaseDate}</h4>
        </article>
      </section>
    </div>
  );
};

Welcome.propTypes = {
  film: object.isRequired,
};

export default Welcome;