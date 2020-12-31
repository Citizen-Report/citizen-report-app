const db = require('../models/model');
const reportsController = {};

// Get all the complaints from the database, store them in the res.locals object and pass this information to next middleware function by invoking next()
reportsController.getComplaints = (req, res, next) => {
  const text = 'SELECT * FROM reports';
  db.query(text)
    .then(complaints => {
      res.locals.complaints = complaints.rows;
      return next();
    })
    .catch(err => next({ error: err }))
};

// Add a new complaint into your database
reportsController.addComplaint = (req, res, next) => {
  // Get all the information you need to create a new complaint from the request body
  const { email, address, city, zipcode, latitude, longitude, category, description, status, created_on } = req.body;
  const text = `INSERT INTO reports(id, email, address, city, zipcode, latitude, longitude, category, description, status, created_on) VALUES (DEFAULT, '${email}', '${address}', '${city}', '${zipcode}', '${latitude}', '${longitude}', '${category}', '${description}', '${status}', '${created_on}') RETURNING *`;
  db.query(text)
    .then(insertedComplaint => {
      console.log(insertedComplaint);
      res.locals.insertedComplaint = insertedComplaint.rows;
      return next();
    })
    .catch(err => {
      console.log(err);
      next({ error: err });
    });
};

// Update a specific complaint from the database
reportsController.updateComplaint = (req, res, next) => {
  const { id } = req.params;
  const { category, status } = req.body;
  const text = `UPDATE reports SET category = '${category}', status = '${status}' WHERE id = ${id} RETURNING *`;
  db.query(text)
    .then((updatedComplaint) => {
      res.locals.updatedComplaint = updatedComplaint.rows;
      return next();
    })
    .catch((err) => next({ error: err }));
};

// Delete a specific complaint from the database
reportsController.deleteComplaint = (req, res, next) => {
  const { id } = req.params;
  const text = `DELETE FROM reports WHERE id = ${id} RETURNING *`;
  db.query(text)
    .then((deletedComplaint) => {
      res.locals.deletedComplaint = deletedComplaint.rows;
      return next();
    })
    .catch((err) => next({ error: err }));
};

module.exports = reportsController;
