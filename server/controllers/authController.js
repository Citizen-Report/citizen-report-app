const db = require('../models/model');
const authController = {};
const bcrypt = require('bcrypt');

authController.createUser = async (req, res, next) => {
  console.log('hit createUser');
  const queryStr = `INSERT INTO users (email, password, city, access) VALUES($1, $2, $3, $4)`;

  // destructure req.body, to be turned into an array for parameterized query 
  const { email, password, city, access } = req.body;

  await db.query(queryStr, [email, password, city, access]);
  return next();
}

authController.startSession = async (req, res, next) => {
  console.log('hit startSession');
  const queryStr = `INSERT INTO sessions (session_id, hashed_session_id, email) VALUES(DEFAULT, $1, $2)`;
  const { email } = req.body;

  // turn email into a hashed_session_id to prevent faking session IDs in cookies
  let hash;
  try {
    hash = await bcrypt.hash(email, 1);
  } catch (error) {
    console.error(err);
  }
  res.locals.ssid = hash;

  await db.query(queryStr, [hash, email]);
  return next();
}

authController.setSSIDCookie = (req, res, next) => {
  console.log('hit setSSIDCookie');
  res.cookie('ssid', res.locals.ssid, {httpOnly: true});
  return next();
}

authController.verifyUser = async (req, res, next) => {
  console.log('hit verifyUser');
  const { email, password } = req.body;
  const queryStr = `SELECT email, password FROM users WHERE email = $1 AND password = $2`;

  const { rows } = await db.query(queryStr, [email, password]);
  if (!rows[0]) return res.redirect('/');
  else return next();
}

authController.getUserInfo = (req, res, next) => {
  console.log('hit getUserInfo');
  return next();
}


module.exports = authController;