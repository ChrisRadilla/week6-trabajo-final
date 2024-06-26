const { getAll } = require('../controllers/cart.controllers');
const express = require('express');

const routerCart = express.Router();

routerCart.route('/')
    .get(getAll)

module.exports = routerCart;