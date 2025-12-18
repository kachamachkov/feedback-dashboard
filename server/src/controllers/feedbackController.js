const router = require('express').Router();
const feedbackService = require('../services/feedbackService');

router.post('/', async (req, res) => {
    const feedbackData = req.body;

    const feedback = await feedbackService.create(feedbackData);

    res.json(feedback);
});

router.get('/', async (req, res) => {
    const feedbacks = await feedbackService.getAll();

    res.json(feedbacks);
});

router.get('/:feedbackId', async (req, res) => {
    const feedback = await feedbackService.getOne(req.params.feedbackId);

    res.json(feedback);
});

router.put('/:feedbackId', async (req, res) => {
    const feedbackData = req.body;
    const feedback = await feedbackService.update(req.params.feedbackId, feedbackData);

    res.json(feedback);
});

router.delete('/:feedbackId', async (req, res) => {
    await feedbackService.delete(req.params.feedbackId);

    res.status(204).json({ok: true});
});

module.exports = router;