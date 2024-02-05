import { hotelsUrl } from '../constants';
import axios from 'axios';

export const getHotels = async () => {
  const { data : hotels } = await axios.get(hotelsUrl);
  return hotels
};
