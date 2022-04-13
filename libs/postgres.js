const { Client } = require('pg')

const getConection = async () => {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'root',
    database: 'music_store'
  });
  await client.connect();
  return client;
}

module.exports = getConection;