import React, { Component } from 'react';
import { Label } from '../Label';
import { Input } from '../Input';
import { Button } from '../Button';

import { filterHotels } from '../../helpers/filterHotels';

import { data } from '../Available/config';
import { getFilterHotels } from '../../services/hotels/getFilterHotels';

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchHotels: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { searchHotels } = this.state;
    const { setHotels } = this.props;

    if (searchHotels !== prevState.searchHotels) {
      // setHotels(filterHotels(data, searchHotels));
      setHotels(getFilterHotels(searchHotels));
    }
  }

  handleChange = (event) => {
    this.setState({ searchHotels: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // this.props.setHotels(filterHotels(data, this.state.searchHotels));
    this.setState({ searchHotels: [] });
  };

  render() {
    const { searchHotels } = this.state;

    return (
      <form
        className="top-section__form-search form"
        action="/"
        method="get"
        onSubmit={this.handleSubmit}
      >
        <div className="form__input form__destination">
          <Label className="label" htmlFor="destination">
            Your destination or hotel name
          </Label>
          <Input
            className="input--destination"
            required
            id="destination"
            name="destination"
            value={searchHotels}
            onChange={this.handleChange}
          />
        </div>
        <div className="form__input form__dates">
          <Label className="label" htmlFor="dates">
            Check-in — Check-out
          </Label>

          <input
            className="input input--dates"
            required
            id="dates"
            type="text"
            name="dates"
            value="Tue 15 Sept − Sat 19 Sept"
          />
        </div>
        <div className="form__input form__param">
          <Label className="label" htmlFor="param"></Label>
          <input
            className="input input--param"
            required
            id="param"
            type="text"
            name="name"
            value="2 Adults − 0 Children − 1 Room"
          />
        </div>
        <Button className="form__button" type="submit">
          Search
        </Button>
      </form>
    );
  }
}
