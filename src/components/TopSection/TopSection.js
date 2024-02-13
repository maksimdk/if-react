import React from 'react';

import './TopSection.css';
import { Form } from '../FormClass';
import { Link } from '../Link';
import { Google, Ios } from '../../icons';

export const TopSection = ({ setHotels }) => {
  return (
    <section className="top-section">
      <div className="container">
        <h1 className="top-section__title">
          Discover stays to&nbsp;live,&nbsp;work or just relax
        </h1>

        <Form setHotels={setHotels} />

        <div className="top-section__download">
          <Link>
            <Ios className="ios" />
          </Link>
          <Link>
            <Google className="google" />
          </Link>
        </div>
      </div>
    </section>
  );
};
