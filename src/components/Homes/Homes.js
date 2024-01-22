import React from 'react';

import { Container } from '../Container';
import { Row } from '../Row';
import { Button } from '../Button';

import { Arrow } from '../../icons';

import { hotels } from './config';

import './Homes.css';
import { Card } from '../Card';

export const Homes = () => {
  return (
    <section className="homes">
      <Container>
        <h2 className="title homes__title">Homes guests loves</h2>
        <div className="homes__content">
          <Row className="homes__title">
            {hotels.map((data) => (
              <Card key={data.id} {...data}></Card>
            ))}
          </Row>
          <Button
            className="homes__arrow-block"
            purpose="arrow-block"
            ariaLabel="Next apartments"
          >
            <Arrow className="arrow" />
          </Button>
        </div>
      </Container>
    </section>
  );
};
