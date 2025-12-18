const router = require('express').Router();
const feedbackService = require('../services/feedbackService');

router.post('/', async (req, res) => {
    const feedbackData = req.body;

    const feedback = await feedbackService.create(feedbackData);

    res.json(feedback);
})

router.get('/', async (req, res) => {
    const feedbacks = await feedbackService.getAll();

    res.json(feedbacks);
})

module.exports = router;