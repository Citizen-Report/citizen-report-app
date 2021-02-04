const path = require('path');
const express = require('express');
const router = express.Router();
const db = require('../models/model');
const reportsController = require('../controllers/reportsController');

// console.log('Inside Reports Router');

// GET request to homepage
router.get('/complaints', reportsController.getComplaints, (req, res) => {
  // send back all the data from the database
  console.log('hit GET /complaints');
  res.status(200).json(res.locals.complaints);
});

// POST request to homepage
router.post('/complaints', reportsController.addComplaint, (req, res) => {
  res.status(200).json(res.locals.insertedComplaint);
});

// Update request to the specific complaint within the modal
// when it is clicked on the tools icon from the table,
router.patch('/complaints/:id', reportsController.updateComplaint, (req, res) => {
  res.status(200).json(res.locals.updatedComplaint);
});

// DELETE request
router.delete('/complaints/:id', reportsController.deleteComplaint, (req, res) => {
  res.status(200).json(res.locals.deletedComplaint);
});

module.exports = router;
