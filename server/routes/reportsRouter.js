const path = require('path');
const express = require('express');
const router = express.Router();
const db = require('../models/reportModel')

// Get request to login page
router.get('/login', (req, res, next) => {
    // respond with rendering the login page (with google authentication)
    // we do not need any controller middleware because we are only going to render a page
})

// Get request to homepage
router.get('/homepage', (req, res, next) => {
    // respond with the homepage 
})

// Update request to the specific complaint within the modal
// when it is clicked on the tools icon from the table,
router.patch('/homepage', (req, res, next) => {
  
})

module.exports = router;
