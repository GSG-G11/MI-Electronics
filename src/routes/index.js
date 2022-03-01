const router = require('express').Router();

const { clientError, serverError, searchComponent, handleHomePage} = require('../controllers');
router.use('/public/html/app.html', handleHomePage);
router.post('/search', searchComponent);
router.use(clientError);
router.use(serverError);

module.exports = router;
