const user = require('../models/User');

const mapResult = (data) => {
    return data.map(({ userName, email }) => ({ userName, email }));
};

const getAllBootCamps = (req, res, next) => {
    user.find({}).then(data => {
        res.status(200).json({ success: true, data: mapResult(data) })
    })
}

module.exports = { getAllBootCamps };