function getRandomNumberBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const getData = () => {
  const data = [
    {
      name: 'Page A',
      uv: getRandomNumberBetween(1, 4000),
      pv: getRandomNumberBetween(1, 1400),
      amt: getRandomNumberBetween(1, 2500)
    },
    {
      name: 'Page B',
      uv: getRandomNumberBetween(1, 4000),
      pv: getRandomNumberBetween(1, 1400),
      amt: getRandomNumberBetween(1, 2500)
    },
    {
      name: 'Page C',
      uv: getRandomNumberBetween(1, 4000),
      pv: getRandomNumberBetween(1, 1400),
      amt: getRandomNumberBetween(1, 2500)
    },
    {
      name: 'Page D',
      uv: getRandomNumberBetween(1, 4000),
      pv: getRandomNumberBetween(1, 1400),
      amt: getRandomNumberBetween(1, 2500)
    },
    {
      name: 'Page E',
      uv: getRandomNumberBetween(1, 4000),
      pv: getRandomNumberBetween(1, 1400),
      amt: getRandomNumberBetween(1, 2500)
    },
    {
      name: 'Page F',
      uv: getRandomNumberBetween(1, 4000),
      pv: getRandomNumberBetween(1, 1400),
      amt: getRandomNumberBetween(1, 2500)
    },
    {
      name: 'Page G',
      uv: getRandomNumberBetween(1, 4000),
      pv: getRandomNumberBetween(1, 1400),
      amt: getRandomNumberBetween(1, 2500)
    }
  ];
  return data;
};
export default getData;
