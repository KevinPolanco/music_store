const pool = require('../libs/postgres');

const getUsersDB = async () => {
  const client = await pool.connect()
  try {
      const rta = await client.query('SELECT * FROM users')
      return {
        ok: true,
        users: rta.rows
      }
  } catch (error) {
      return {
        ok: false,
        msg: error.message
      }
  } finally {
      client.release();
  }
}

const getUserDB = async (id) => {
  const client = await pool.connect()
  const query = {
    text: 'SELECT * FROM users WHERE id = $1',
    values: [id]
  }
  try {
      const rta = await client.query(query)
      if (rta.rowCount === 0){
        return {
          ok: false,
          msg: 'not found'
        }
      }
      return {
        ok: true,
        users: rta.rows
      }
  } catch (error) {
      return {
          ok: false,
          msg: error.message
      }
  } finally {
      client.release();
  }
}


const createUsersDB = async (name, email, password) => {
  const client = await pool.connect()
  const query = {
      text: `INSERT INTO users (name, email, password, type) VALUES ($1,$2,$3,$4) RETURNING *`, 
      values: [name, email, password, '1']
  }
  try {
      const rta = await client.query(query)
      return {
          ok: true,
          users: rta.rows
      }
  } catch (error) {
      return {
          ok: false,
          msg: error.message
      }
  } finally {
      client.release();
  }
}

const updateUserDB = async (id, name, email, password) => {
  const client = await pool.connect()
  const query = {
      text: 'UPDATE users SET name=$2, email=$3, password=$4WHERE id = $1 RETURNING *', 
      values: [id, name, email, password]
  }
  try {
      const rta = await client.query(query)
      return {
          ok: true,
          users: rta.rows
      }
  } catch (error) {
      return {
          ok: false,
          msg: error.message
      }
  } finally {
      client.release();
  }
}
const deleteUserDB = async (id) => {
  const client = await pool.connect()
  const query = {
     text: 'DELETE FROM users WHERE  id=$1 RETURNING *',
     values: [id]
  }
  try {
    const rta = await client.query(query)
    if (rta.rowCount === 0){
      return {
        ok: false,
        msg: 'not found'
      }
    }
    return {
      ok: true,
      users: rta.rows
    }
  } catch (error) {
      return {
          ok: false,
          msg: error.message
      }
  } finally {
      client.release();
  }
}


module.exports = {
  getUsersDB,
  getUserDB,
  createUsersDB,
  updateUserDB,
  deleteUserDB
}