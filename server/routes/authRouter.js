const path = require('path');
const express = require('express');
const router = express.Router();
const db = require('../models/model');
const reportsController = require('../controllers/reportsController');
const authController = require('../controllers/authController');

const setReqBody = (req, res, next) => {
  req.body = {
    email: 'citizen7@gmail.com',
    password: 'secret123',
    city: 'Los Angeles',
    access: false
   }

  return next();
}
// post login: verify user, create session, set ssid cookie, redirect to get homepage 

// post signup: create user, create session, set ssid cookie, redirect to get homepage
router.post('/signup', 
  setReqBody, 
  authController.createUser,
  authController.startSession,
  authController.setSSIDCookie,
  (req, res) => {
    res.redirect('/');
})

// router.get('/', (req, res) => {
//   console.log('hit GET /auth/');
//   res.status(200).end();
// })

module.exports = router;