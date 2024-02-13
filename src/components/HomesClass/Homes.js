import React, { Component } from 'react';

import { getHotels } from '../../services/hotels/getHotels';

import { Container } from '../Container';
import { Row } from '../Row';
import { Button } from '../Button';
import { Card } from '../Card';
import { Title } from '../Title';
import { Arrow } from '../../icons';

import './Homes.css';

export class Homes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotels: [],
    };
  }

  componentDidMount() {
    getHotels().then((hotels) => this.setState({ hotels }));
  }

  render() {
    const { hotels } = this.state;
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
  }
}
