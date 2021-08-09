const authController = require('../controllers/authController');
const homeController = require('../controllers/homeController');
const catsController = require('../controllers/catsController');

module.exports = (app) => {
    app.use('/', homeController);
    app.use('/users', authController);
    app.use('/cats', catsController);
    
    app.use((req, res) => {
        res.status(404).render('404');
    });
}