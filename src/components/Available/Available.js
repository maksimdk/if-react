import React from 'react';

import { Container } from '../Container';
import { Row } from '../Row';
import { Card } from '../Card';
import { Title } from '../Title';

import './Available.css';
import classNames from 'classnames';

export const Available = ({ hotels }) => {
  const hasHotels = hotels.length > 0;

  return (
    <section className="available">
      <Container>
        <Title
          className={classNames('available__title', {
            'available__title--margin-none': !hasHotels,
          })}
        >
          {hasHotels > 0 ? 'Available' : 'Nothing found!'}
        </Title>
        <div
          className={classNames('available__content', {
            'available__content--hidden': !hasHotels,
          })}
        >
          <Row className="available__cards">
            {hotels.map((data) => (
              <Card key={data.id} {...data}></Card>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};
