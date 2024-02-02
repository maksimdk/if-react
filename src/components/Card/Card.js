import React from 'react';
import classNames from 'classnames';
import { Link } from '../Link';

export const Card = ({  visible, name, city, country, imageUrl, href = '#' }) => {
  return (
    <li
      className={classNames('col-lg-3 col-md-6 col-sm-3 card',  visible)}
    >
      <img className="card__img" src={imageUrl} alt={name} />
      <a className="link card__link" href={href}>
        {name}
      </a>
      <p className="card__text">{`${country}, ${city}`}</p>
    </li>
  );
};
