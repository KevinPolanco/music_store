const pool = require('../libs/postgres');


const getDiscsDB = async () => {
  const client = await pool.connect()
  try {
      const rta = await client.query('SELECT * FROM discs')
      return {
        ok: true,
        discs: rta.rows
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

const getDiscDB = async (id) => {
  const client = await pool.connect()
  const query = {
    text: 'SELECT * FROM discs WHERE id = $1',
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
        discs: rta.rows
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

const cretaDiscDB = async (name, artist, genre, release_year, label, price, cover, url) => {
  const client = await pool.connect()
  const query = {
      text: `INSERT INTO discs (name, artist, genre, release_year, label, price, cover, url) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *`, 
      values: [name, artist, genre, release_year, label, price, cover, url]
  }
  try {
      const rta = await client.query(query)
      return {
          ok: true,
          discs: rta.rows
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

const updateDiscDB = async (id, name, artist, genre, release_year, label, price, url) => {
  const client = await pool.connect()
  const query = {
     text: 'UPDATE discs SET name=$2, artist=$3, genre=$4, release_year=$5, label=$6, price=$7, url=$8 WHERE id = $1 RETURNING *',
     values: [id, name, artist, genre, release_year, label, price, url]
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
      discs: rta.rows
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

const deleteDiscDB = async (id) => {
  const client = await pool.connect()
  const query = {
     text: 'DELETE FROM discs WHERE  id=$1 RETURNING *',
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
      discs: rta.rows
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
  getDiscsDB,
  getDiscDB,
  cretaDiscDB,
  updateDiscDB,
  deleteDiscDB
}