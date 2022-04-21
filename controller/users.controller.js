const { getUsersDB, getUserDB, createUsersDB, updateUserDB, deleteUserDB, getUserDiscsDB } = require('../database/users.querys')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

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
  const { name, email, password} = req.body
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt)
  let rta = await getUsersDB()
  if(!rta.ok){
    return res.status(500).json({ok: false, msg: rta.msg}); 
  }
  else if(rta.users.some(item => item.email == email)){
    return res.status(422).json({ok: false, msg: 'email already registered'})
  } 
  else {
    rta = await createUsersDB(name, email, hashPassword);
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

const loginUser = async (req, res) => {
  const { email, password } = req.body 
  const rta = await getUsersDB()
  const user = rta.users.find(item => item.email == email)
  if(!rta.ok){
    return res.status(500).json({ok: false, msg: rta.msg})
  }
  if(user == undefined) {
    return res.status(400).json({
      ok: false,
      msg: 'no user exists'
    });
  }
  const passwordDB = user.password
  const comparePassword = await bcrypt.compare(password, passwordDB)
  if(!comparePassword) {
    return res.status(400).json({
      ok: false,
      msg: 'Incorrect password'
    });
  }
  const payload = { id:user.id, type:user.type};
  const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: "1h"});
  return res.json({
    OK: true,
    token
  })
};

const getUserDiscs = async (req, res) => {
  const { id } = req.params
  const rta = await getUserDiscsDB(id);
  if(rta.msg === 'not found'){
    return res.status(404).json({ok: false, msg: rta.msg}); 
  }
  if(!rta.ok){
    return res.status(500).json({ok: false, msg: rta.msg}); 
  }
  return res.json({ok: true, discs: rta.discs});
};

module.exports = {
  getUsers,
  getUser,
  createUsers,
  updateUser,
  deleteUser,
  loginUser,
  getUserDiscs
}