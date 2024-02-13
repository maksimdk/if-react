import React, { useEffect, useState } from 'react';

import { getFilterHotels } from '../../services/hotels/getFilterHotels';

import { Label } from '../Label';
import { Input } from '../Input';
import { Button } from '../Button';

export const Form = ({ setHotels }) => {
  const [searchHotels, setSearchHotels] = useState('');

  useEffect(() => {
    if (searchHotels) {
      getFilterHotels(searchHotels).then((hotels) => setHotels(hotels));
    }
  }, [searchHotels]);

  const handleChange = (event) => {
    setSearchHotels(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchHotels('');
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
