const pool = require('../libs/postgres');


const getDiscsDB = async (limit,offset) => {
  
  const client = await pool.connect()
  let query = []
  if(!limit && !offset) {
     query = { text:'SELECT * FROM discs'};
  }
  if(limit && offset) {
    query = { 
      text:'SELECT * FROM discs limit $1 offset $2',
      values: [limit, offset]
    };
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

const addDiscsUserDB = async (discs_id, users_id) => {
  const client = await pool.connect()
  const query = {
       text: `INSERT INTO users_discs (discs_id, users_id) VALUES ($1,$2) RETURNING *`, 
       values: [discs_id, users_id]
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
};

const getDiscsUserDB = async (id) => {
  const client = await pool.connect()
  const query = {
    text: `
          SELECT ud.users_id, d.id as discs_id, d.name, d.artist, d.genre, d.release_year, d.label, d.price, d.cover, d.url from discs d
          inner join users_discs ud 
            on d.id = ud.discs_id
          where ud.users_id = $1;`,
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
  deleteDiscDB,
  addDiscsUserDB,
  getDiscsUserDB
}
