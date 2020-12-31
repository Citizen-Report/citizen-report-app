const path = require('path');
const express = require('express');
const router = express.Router();
const db = require('../models/model');
const cookieParser = require('cookie-parser');

const reportsController = require('../controllers/reportsController');
const authController = require('../controllers/authController');

// Middleware to set req body for testing purposes
const setReqBody = (req, res, next) => {
  req.body = {
    email: 'citizen7@gmail.com',
    password: 'secret123',
    city: 'Los Angeles',
    access: false
   }

  return next();
}
// POST /login: verify user, create session, set ssid cookie, redirect to get homepage 

// POST /signup: create user, create session, set ssid cookie, redirect to get homepage
router.post('/signup', 
  authController.createUser,
  authController.startSession,
  authController.setSSIDCookie,
  (req, res) => {
    res.redirect('/');
})
/**
 * GET /, to get current user's info based on the cookie sent from client. 
 * Middleware: getUserInfo, send back as JSON
 */
router.get('/', cookieParser(), authController.hasSession, authController.getUserInfo, (req, res) => {
  const hasSession = res.locals.hasSession;
  const userInfo = res.locals.userInfo;
  res.status(200).json({hasSession, userInfo});
})


module.exports = router;