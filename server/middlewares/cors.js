module.exports = () => (req, res, next) => {
    res.setHeader('Access-Controll-Allow-Origin', '*');
    res.setHeader('Access-Controll-Allow-Methods', 'HEAD, OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Controll-Allow-Headers', 'Content-Type, Authorization');

    next();
}