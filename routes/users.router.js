const express = require("express");
const { getUsers, getUser, createUsers, updateUser, deleteUser } = require('../controller/users.controller')
const router = express.Router();

router.get('/', getUsers)
router.get('/:id', getUser)
router.post('/', createUsers)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

module.exports = router