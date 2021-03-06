const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const authMiddleware = require('../middlewares/auth');
const storageMiddleware = require('../middlewares/storage');

module.exports = (app) => {
    app.use(cors());
    app.use('/static', express.static('static'));

    app.use(express.json());

    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());

    app.use(authMiddleware());

    app.use((req, res, next) => {
        //if (!req.url.includes('favicon')) {
            console.log('>>>', req.method, req.url);
       // }

        // if (req.user) {
        //     console.log('Known user', req.user.username);
        // }

        next();
    });

    app.use(storageMiddleware());
}