import React from 'react';
import classNames from 'classnames';

import { useAvailableContext } from './Available.context';

import { Container } from '../Container';
import { Row } from '../Row';
import { Card } from '../Card';
import { Title } from '../Title';

import './Available.css';

export const Available = () => {
  const { hotels } = useAvailableContext();

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
