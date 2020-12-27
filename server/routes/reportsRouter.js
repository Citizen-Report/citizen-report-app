const path = require('path');
const express = require('express');
const router = express.Router();
const db = require('../models/reportsModel');
const reportsController = require('../controllers/reportsController');

// GET request to login page
router.get('/login', (req, res, next) => {
    // respond with rendering the login page (with google authentication)
    // we do not need any controller middleware because we are only going to render a page
})

// GET request to homepage
router.get('/api/complaints', reportsController.getComplaints, (req, res) => {
    // send back all the data from the database 
    res.status(200).json(res.locals.complaints)
});

// POST request to homepage
router.post('/api/complaints', reportsController.addComplaint, (req, res) => {
    res.status(200).json(res.locals.insertedComplaint);
})


// Update request to the specific complaint within the modal
// when it is clicked on the tools icon from the table,
router.put('/api/complaints/:id', reportsController.updateComplaint, (req, res) => {
  res.status(200).json(res.locals.updatedComplaint);
})

// DELETE request
router.delete('/api/complaints/:id', reportsController.deleteComplaint, (req, res) => {
    res.status(200).json(res.locals.deletedComplaint);
})



module.exports = router;
