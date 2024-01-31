import React from 'react';
import classNames from 'classnames';

export const Card = ({ className, visible, name, city, country, imageUrl }) => {
  return (
    <li
      className={classNames('col-lg-3 col-md-6 col-sm-3', className, visible)}
    >
      <img className="homes__img" src={imageUrl} alt={name} />
      <a className="link homes__link" href="#">
        {name}
      </a>
      <p className="homes__text">{`${country}, ${city}`}</p>
    </li>
  );
};
