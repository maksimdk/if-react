import React from 'react';

import './TopSection.css';
import { Form } from '../Form';
import { Link } from '../Link';
import { Google, Ios } from '../../icons';

export const TopSection = () => {
  return (
    <section className="top-section">
      <div className="container">
        <h1 className="top-section__title">
          Discover stays to&nbsp;live,&nbsp;work or just relax
        </h1>

        <Form />

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
