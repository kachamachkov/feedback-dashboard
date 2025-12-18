const router = require('express').Router();

const userController = require('./controllers/userController');
const feedbackController = require('./controllers/feedbackController');

router.use('/users', userController);
router.use('/feedback', feedbackController);

module.exports = router;