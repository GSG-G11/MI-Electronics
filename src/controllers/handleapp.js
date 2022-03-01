const { join } = require('path');

const handleHomePage = (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'public', 'html', 'app.html'));
};

module.exports = handleHomePage;
