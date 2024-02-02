import React from 'react';

import { Container } from '../Container';
import { Row } from '../Row';
import { Button } from '../Button';
import { Card } from '../Card';
import { Title } from '../Title';

import { Arrow } from '../../icons';

import { hotels } from './config';

import './Homes.css';

export const Homes = () => {
  return (
    <section className="homes">
      <Container>
        <Title className="homes__title">Homes guests loves</Title>
        <div className="homes__content">
          <Row className="homes__cards">
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
