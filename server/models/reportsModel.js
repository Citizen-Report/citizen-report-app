// require pool from the node postgresql
const { Pool } = require('pg');

// get the url from the elephant database 
const PG_URI = 'postgres://wzkyzoiz:X-NrTxZA7LWj57zUk7Zp7c_YE18If4z2@suleiman.db.elephantsql.com:5432/wzkyzoiz';

// create an instance of the pool
const pool = new Pool({
  connectionString: PG_URI
});

// Export the query method of the pool 
module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
}
