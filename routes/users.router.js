const express = require("express");
const { getUsers, getUser, createUsers, updateUser, deleteUser, loginUser } = require('../controller/users.controller')
const { validatorSchema } = require('../middlewares/validatorSchema')
const tokenValidator = require('../middlewares/tokenValidator')
const { createUserSchema , loginUserSchema} = require('../schemas/users.schemas')
const router = express.Router();

router.get('/', getUsers);
router.post('/login', validatorSchema(loginUserSchema, 'body'), loginUser)
router.get('/:id', getUser);
router.post('/', validatorSchema(createUserSchema, 'body'), createUsers);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
module.exports = router