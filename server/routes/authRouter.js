const path = require('path');
const express = require('express');
const router = express.Router();
const db = require('../models/model');
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
router.post('/login',
  authController.verifyUser,
  authController.startSession,
  authController.setSSIDCookie,
  (req, res) => {
    res.redirect('/');
  } 
)
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
 * If valid cookie, send back JSON: { hasSession: true, userInfo: {email, city, access} }
 * If no valid cookie, send back JSON: { hasSession: false, userInfo: null}
 * Middleware: getUserInfo, send back as JSON
 */


module.exports = router;