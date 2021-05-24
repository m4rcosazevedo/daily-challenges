// API Response
const response = [{
  symbol: 'SIC DIVISION',
  exchange: 'Agricultural services',
  volume: 42232,
}]

// Required format
// [{
//   category: 'Agricultural services',
//   name: 'SIC DIVISION',
//   y: 42232,
// }]

const mapping = {
  symbol: 'category',
  exchange: 'name',
  volume: 'y',
};

const highChartsAdapter = (response, mapping) => {
  return response.map(item => {
    const normalized = {};

    // Normalize each response's item key, according to the mapping
    Object.keys(item).forEach(key => (normalized[mapping[key]] = item[key]));
      return normalized;
    });
};

const requiredFormat = highChartsAdapter(response, mapping);
console.log(requiredFormat);