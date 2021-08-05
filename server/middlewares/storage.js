const catsService = require("../services/cats");
const userService = require("../services/user");

module.exports = () => (req, res, next) => {
    req.storage = {
        ...catsService,
        ...userService
    };

    next();
}