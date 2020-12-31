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

/**
 * getUserInfo: checks if cookie has a valid open session
 * If valid cookie, send back JSON: { hasSession: true, userInfo: {email, city, access} }
 * If no valid cookie, send back JSON: { hasSession: false, userInfo: null}
 */
authController.hasSession = async (req, res, next) => {
  console.log('hit hasSession');
  // console.log('req.cookie.ssid:', req.cookies.ssid);
  // query sessions db for cookie
  const queryStr = `SELECT * FROM sessions WHERE hashed_session_id = $1`;
  const data = await db.query(queryStr, [req.cookies.ssid]);
  // console.log(data);
  if (data.rows.length){
    res.locals.hasSession = true;
    res.locals.email = data.rows[0].email;
  } else {
    res.locals.hasSession = false;
  }
  console.log('hasSession: ', res.locals.hasSession, '. user email: ', res.locals.email);
  return next();
}

authController.getUserInfo = async (req, res, next) => {
  console.log('hit getUserInfo');
  if (res.locals.hasSession) {
    const queryStr = `SELECT * FROM users WHERE email = $1`;
    const data = await db.query(queryStr, [res.locals.email]);

    const {email, city, access } = data.rows[0];
    res.locals.userInfo = {email, city, access};
  } else {
    res.locals.userInfo = null;
  }
    return next();
}


module.exports = authController;