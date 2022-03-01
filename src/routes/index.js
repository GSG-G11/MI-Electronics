const router = require('express').Router();

const { clientError, serverError, searchComponent } = require('../controllers');

router.post('/search', searchComponent);
router.use(clientError);
router.use(serverError);

module.exports = router;
