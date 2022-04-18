const getConection = require('../libs/postgres');

const getUser = async () => {
  const client = await getConection();
  const rta = await client.query('SELECT * FROM users');
  console.log(rta.rows)
  return rta.rows;
}


  
module.exports = getUser