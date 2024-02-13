import { hotelsUrl } from '../constants';
import axios from 'axios';

export const getFilterHotels = async (search) => {
  const { data: hotels } = await axios.get(`${hotelsUrl}?search=${search}`);
  return hotels;
};
