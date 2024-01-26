export const filterHotels = (arr, str) => {
  return arr.filter(
    (item) =>
      item.country.toLowerCase().includes(str.toLowerCase()) ||
      item.city.toLowerCase().includes(str.toLowerCase()) ||
      item.name.toLowerCase().includes(str.toLowerCase()),
  );
};
