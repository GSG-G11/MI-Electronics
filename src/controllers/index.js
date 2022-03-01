const searchComponent = require('./searchComponent');
const handleHomePage = require('./handleapp');

const { clientError, serverError } = require('./errors');

module.exports = {
  clientError,
  serverError,
  searchComponent,
  handleHomePage,
};
