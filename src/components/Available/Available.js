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
        <Title className="available__title">
          {hotels.length > 0 ? 'Available' : 'Nothing found!'}
        </Title>

        <div
          className="available__content"
          style={hotels.length > 0 ? { display: 'flex' } : { display: 'none' }}
        >
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
