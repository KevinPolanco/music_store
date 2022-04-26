const { getDiscsDB, getDiscDB, cretaDiscDB, updateDiscDB, deleteDiscDB, addDiscsUserDB } = require('../database/discs.querys')

const getDiscs = async (req, res) => {
  const rta = await getDiscsDB();
  if(!rta.ok){
     return res.status(500).json({ok: false, msg: rta.msg}); 
  };
  return res.json({ok: true, discs: rta.discs});
};

const getDisc = async (req, res) => {
  const { id } = req.params
  const rta = await getDiscDB(id);
  if(rta.msg === 'not found'){
    return res.status(404).json({ok: false, msg: rta.msg}); 
  }
  if(!rta.ok){
    return res.status(500).json({ok: false, msg: rta.msg}); 
  }
  return res.json({ok: true, discs: rta.discs});
};

const cretaDisc = async (req, res) => {
  const { name, artist, genre, release_year, label, price, cover, url } = req.body
    let rta = await getDiscsDB()
    if(!rta.ok){
      return res.status(500).json({ok: false, msg: rta.msg}); 
    }
    else if(rta.discs.some(item => item.name == name)){
      return res.status(422).json({ok: false, msg: 'discs already added'})
    } 
    else {
      rta = await cretaDiscDB(name, artist, genre, release_year,  label, price, cover, url);
      if(!rta.ok){
        return res.status(500).json({ok: false, msg: rta.msg}); 
      }
      return res.status(201).json({ok: true, discs: rta.discs})
    }
};

const updateDisc = async (req, res) => {
  const { name, artist, genre, release_year, label, price, url } = req.body;
  const { id } = req.params
  const rta = await updateDiscDB(id, name, artist, genre, release_year, label, price, url);
  if(rta.msg === 'not found'){
    return res.status(404).json({ok: false, msg: rta.msg}); 
  }
  if(!rta.ok){
    return res.status(500).json({ok: false, msg: rta.msg}); 
  }
  return res.json({ok: true, discs: rta.discs});
};

const deleteDisc = async (req, res) => {
  const { id } = req.params
  const rta = await deleteDiscDB(id);
  if(rta.msg === 'not found'){
    return res.status(404).json({ok: false, msg: rta.msg}); 
  }
  if(!rta.ok){
    return res.status(500).json({ok: false, msg: rta.msg}); 
  }
  return res.json({ok: true, discs: rta.discs});
};

const addDiscsUser = async (req, res) => {
  const {discs_id} = req.body
  const users_id = parseInt(req.id)
  const rta = await addDiscsUserDB(parseInt(discs_id), users_id);
  if(!rta.ok){
    return res.status(500).json({ok: false, msg: rta.msg}); 
  }
  return res.status(201).json({ok: true, discs: rta.discs})
}

module.exports = {
  getDiscs,
  getDisc,
  cretaDisc,
  updateDisc,
  deleteDisc,
  addDiscsUser
}