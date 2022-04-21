const { Pool } = require('pg')

const connectionString = 
    process.env.DATABASE_URL || 
    `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`

const pool = process.env.DATABASE_URL ?
  new Pool({
      connectionString,
      ssl: {rejectUnauthorized: false}
  }) : new Pool({ connectionString });
    

module.exports = pool;