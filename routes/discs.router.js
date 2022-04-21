const express = require("express");
const { getDiscs, getDisc, cretaDisc, updateDisc, deleteDisc } = require('../controller/discs.controller')
const router = express.Router();

router.get('/', getDiscs)
router.get('/:id', getDisc)
router.post('/', cretaDisc)
router.put('/:id', updateDisc)
router.delete('/:id', deleteDisc)

module.exports = router

