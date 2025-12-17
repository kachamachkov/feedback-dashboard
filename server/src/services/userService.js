const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.register = async (userData) => {
    if (userData.password !== userData.rePass) {
        throw new Error('Password missmatch!');
    };

    // todo: dont register if user with same email exists! :)
    const user = await User.create(userData);

    return generateAccessToken(user);
};

exports.login = async (userData) => {
    const user = await User.findOne({ email: userData.email });

    if (!user) {
        throw new Error('No such user.');
    }

    const isValid = await bcrypt.compare(userData.password, user.password);

    if (!isValid) {
        throw new Error('No such user.')
    }

    return generateAccessToken(user);
}

function generateAccessToken(user) {
    const accessToken = jwt.sign({
        _id: user._id,
        email: user.email,
    }, "SOMESECRETHERE");

    return {
        _id: user._id,
        email: user.email,
        accessToken,
    };
}