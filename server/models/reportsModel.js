// require pool from the node postgresql
const { Pool } = require('pg');

// require dotenv module
require('dotenv').config()

// create an instance of the pool
const pool = new Pool({
  connectionString: process.env.PG_URI
});

// Export the query method of the pool 
module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
}
