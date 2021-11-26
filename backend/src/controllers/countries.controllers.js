
const countriesList = require ('../../data/countries');
const countriesCtrl = {};

countriesCtrl.getCountries = async (req, res) => {
  const countries = countriesList;
  res.json(countries);//Retorna un json
};

module.exports = countriesCtrl;