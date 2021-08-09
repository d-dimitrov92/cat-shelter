const router = require('express').Router();

router.get('/', async (req, res) => {
    res.json({"message": "Hello"})
});

// router.get('/about', async (req, res) => {

//     res.render('about');
// });

// router.get('/profile', async (req, res) => {
//     const userData = await req.storage.getUserByUsername(req.user.username);

//     res.render('auth/profile', { userData });
// });



module.exports = router;