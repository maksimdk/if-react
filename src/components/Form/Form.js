import React, { useState } from 'react';
import { Label } from '../Label';
import { Input } from '../Input';
import { Button } from '../Button';

import { filterHotels } from '../../helpers/filterHotels';

import { data } from '../Available/config';

export const Form = ({ setHotels }) => {
  const [searchHotels, setSearchHotels] = useState([]);
  const handleChange = (event) => {
    console.log(event.target.value);
    setSearchHotels(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setHotels(filterHotels(data, searchHotels));
    setSearchHotels([]);
  };

  return (
    <form
      className="top-section__form-search form"
      action="/"
      method="get"
      onSubmit={handleSubmit}
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
          onChange={handleChange}
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
};
