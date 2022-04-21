const express = require("express");
const { getUsers, getUser, createUsers, updateUser, deleteUser, loginUser, getUserDiscs } = require('../controller/users.controller')
const { validatorSchema } = require('../middlewares/validatorSchema')
const { getUserSchema, createUserSchema , loginUserSchema} = require('../schemas/users.schemas')
const router = express.Router();

router.get('/', getUsers);
router.get('/:id', validatorSchema(getUserSchema, 'params'), getUser);
router.post('/', validatorSchema(createUserSchema, 'body'), createUsers);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.post('/login', validatorSchema(loginUserSchema, 'body'), loginUser)
router.get('/discs/:id', getUserDiscs);
module.exports = router