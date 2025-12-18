const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    name: String,
    email: String,
    content: String,
    category: String,
    status: String,
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;