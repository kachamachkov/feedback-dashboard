const Feedback = require('../models/Feedback');

exports.getAll = () => Feedback.find();

exports.create = async (feedbackData) => Feedback.create(feedbackData);
