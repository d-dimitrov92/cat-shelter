const router = require('express').Router();
const { isUser } = require("../middlewares/guards");

const { getAllCats, createCat, getCatById } = require('../services/cats')


router.get('/', async (req, res) => {
    const data = await getAllCats();
    res.status(200).json(data);
});

router.post('/', async (req, res) => {
    const data = {
        name: req.body.name,
        age: req.body.age,
        imageUrl: req.body.imageUrl,
        gender: req.body.gender,
    }
    console.log(req.body);
    const result = await createCat(data);
    res.status(201).json(result);
})

router.get('/:id', async (req, res) => {
    const data = await getCatById(req.params.id);
    res.status(200).json(data);
});

// router.get('/create', isUser(), async (req, res) => {

//     res.render('cat/create');
// });

// router.post('/create', isUser(), async (req, res) => {
//     try {
//         const catData = {
//             name: req.body.name,
//             description: req.body.description,
//             imageUrl: req.body.imageUrl,
//             author: req.user._id
//         }

//         const cat = await req.storage.createCat(catData, req.user._id);

//         res.redirect('/');
//     } catch (err) {
//         let errors;
//         if (err.errors) {
//             errors = Object.values(err.errors).map(e => e.properties.message);
//         } else {
//             errors = [err.message];
//         }

//         const ctx = {
//             errors,
//             catData: {
//                 name: req.body.name,
//                 description: req.body.description,
//                 imageUrl: req.body.imageUrl,
//             }
//         }

//         res.status(400).render('cat/create', ctx);
//     }
// });

// router.get('/details/:id', async (req, res) => {
//     try {
//         const cat = await req.storage.getCatById(req.params.id);

//         cat.hasUser = Boolean(req.user);
//         cat.isAuthor = req.user && req.user._id == cat.author;
//         res.render('cat/details', { cat });
//     } catch (err) {
//         console.log(err.message);
//         res.status(404).render('404');
//     }

// });

// router.post('/edit/:id', isUser(), async (req, res) => {
//     try {
//         const cat = await req.storage.getCatById(req.params.id);

//         if (req.user._id != cat.author) {
//             throw new Error('You cannot edit cat information.')
//         }

//         await req.storage.editCat(req.params.id, req.body);

//         res.redirect('/');

//     } catch (err) {
//         let errors;

//         if (err.errors) {
//             errors = Object.values(err.errors).map(e => e.properties.message);
//         } else {
//             errors = [err.message];
//         }

//         const ctx = {
//             errors,
//             catData: {
//                 _id: req.params.id,
//                 name: req.body.name,
//                 description: req.body.description,
//                 imageUrl: req.body.imageUrl
//             }
//         }

//         res.status(400).render('cat/edit', ctx);
//     }
// });

// router.get('/edit/:id', isUser(), async (req, res) => {
//     try {
//         const catData = await req.storage.getCatById(req.params.id);

//         if (req.user._id != catData.author) {
//             throw new Error('You cannot edit cat information.')
//         }

//         res.render('cat/edit', { catData });

//     } catch (err) {
//         console.log(err.message);
//         res.status(400).redirect('/cat/details/' + req.params.id);
//     }
// });

// router.get('/delete/:id', isUser(), async (req, res) => {
//     try {
//         const cat = await req.storage.getCatById(req.params.id);

//         if (cat.author != req.user._id) {
//             throw new Error('Cannot delete cat information.');
//         }

//         await req.storage.deleteCat(req.params.id);
//         res.redirect('/');
//     } catch (err) {
//         console.log(err.message);
//         res.status(400).redirect('/cat/details/' + req.params.id);
//     }
// });


module.exports = router;

