const Feedback = require('../models/Feedback');

exports.getAll = () => Feedback.find();

exports.getOne = (feedbackId) => Feedback.findById(feedbackId);

exports.update = (feedbackId, feedbackData) => Feedback.findByIdAndUpdate(feedbackId, feedbackData);

exports.create = async (feedbackData) => Feedback.create(feedbackData);

exports.delete = async (feedbackId) => Feedback.findByIdAndDelete(feedbackId);
