import React from 'react';

import { Container } from '../Container';
import { Row } from '../Row';
import { Card } from '../Card';
import { Title } from '../Title';

import './Available.css';

export const Available = ({ hotels }) => {
  return (
    <section className="available">
      <Container>
        <Title className="available__title">Available</Title>
        <div className="available__content">
          <Row className="available__cards">
            {hotels.map((data) => (
              <Card key={data.id} {...data}></Card>
            ))}
          </Row>
          {/*<Button*/}
          {/*  className="homes__arrow-block"*/}
          {/*  purpose="arrow-block"*/}
          {/*  ariaLabel="Next apartments"*/}
          {/*>*/}
          {/*  <Arrow className="arrow" />*/}
          {/*</Button>*/}
        </div>
      </Container>
    </section>
  );
};
