module.exports = (req, res, next) => {
    res.body = {};
    next();
}