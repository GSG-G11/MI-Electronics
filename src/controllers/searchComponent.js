const fetchNode = require('node-fetch');
require('env2')('.env');

const searchComponent = (req, res) => {
  fetchNode(`https://beta.api.oemsecrets.com/partsearch?apiKey=${process.env.API_KEY}&searchTerm=${req.body.component}`)
    .then((data) => data.json())
    .then((result) => res.json(result))
    .catch((error) => res.status(404).send(error));
};
module.exports = searchComponent;
