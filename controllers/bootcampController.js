const getAllBootCamps = (req, res, next) => {
    res.status(200).json({ success: true, data: [] })
}

exports.methods = { getAllBootCamps }