function getRandomNumberBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const get_summarydata = () => {
  const data_summary = [
    {
      uv: getRandomNumberBetween(1, 50),

      fill: 'rgba(253, 116, 155, 1)'
    },
    {
      uv: 50,

      fill: 'rgba(255,255,255,1)'
    }
  ];
  return data_summary;
};

export default get_summarydata;
