const { getAll, create, remove, update, login } = require('../controllers/user.controllers');
const express = require('express');
const { verifyJwt } = require('../utils/verifyJWT');

const routerUser = express.Router();

routerUser.route('/')
    .get(verifyJwt, getAll) //🔒🔒🔒
    .post(create);

routerUser.route('/login') //? /_> users/login
    .post(login)

routerUser.route('/me') //users/me
    .get(verifyJwt, login)//🔒🔒🔒

routerUser.route('/:id')
    .delete(verifyJwt, remove) //🔒🔒🔒
    .put(verifyJwt, update); //🔒🔒🔒

module.exports = routerUser;