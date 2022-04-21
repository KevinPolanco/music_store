const { getUsersDB, getUserDB, createUsersDB, updateUserDB, deleteUserDB } = require('../database/users.querys')

const getUsers = async (req, res) => {
  const rta = await getUsersDB();
  if(!rta.ok){
     return res.status(500).json({ok: false, msg: rta.msg}); 
  };
  return res.json({ok: true, users: rta.users});
};

const getUser = async (req, res) => {
  const { id } = req.params
  const rta = await getUserDB(id);
  if(rta.msg === 'not found'){
    return res.status(404).json({ok: false, msg: rta.msg}); 
  }
  if(!rta.ok){
    return res.status(500).json({ok: false, msg: rta.msg}); 
  }
  return res.json({ok: true, users: rta.users});
};

const createUsers = async (req, res) => {
  const { name, email, password } = req.body
  let rta = await getUsersDB()
  if(!rta.ok){
    return res.status(500).json({ok: false, msg: rta.msg}); 
  }
  else if(rta.users.some(item => item.email == email)){
    return res.status(422).json({ok: false, msg: 'email already registered'})
  } 
  else {
    rta = await createUsersDB(name, email, password);
    if(!rta.ok){
      return res.status(500).json({ok: false, msg: rta.msg}); 
    }
    return res.status(201).json({ok: true, users: rta.users})
  }
};

const updateUser = async (req, res) => {
  const { name, email, password } = req.body;
  const { id } = req.params
  const rta = await updateUserDB(id, name, email, password);
  if(rta.msg === 'not found'){
    return res.status(404).json({ok: false, msg: rta.msg}); 
  }
  if(!rta.ok){
    return res.status(500).json({ok: false, msg: rta.msg}); 
  }
  return res.json({ok: true, users: rta.users});
};

const deleteUser = async (req, res) => {
  const { id } = req.params
  const rta = await deleteUserDB(id);
  if(rta.msg === 'not found'){
    return res.status(404).json({ok: false, msg: rta.msg}); 
  }
  if(!rta.ok){
    return res.status(500).json({ok: false, msg: rta.msg}); 
  }
  return res.json({ok: true, users: rta.users});
};

module.exports = {
  getUsers,
  getUser,
  createUsers,
  updateUser,
  deleteUser
}