const express = require("express");
const { getDiscs, getDisc, cretaDisc, updateDisc, deleteDisc, addDiscsUser } = require('../controller/discs.controller')
const tokenValidator = require('../middlewares/tokenValidator')
const { createDiscsSchema}  = require('../schemas/discs.schemas')
const { validatorSchema } = require('../middlewares/validatorSchema')
const router = express.Router();

router.get('/', tokenValidator, getDiscs)
router.post('/addDics',tokenValidator, addDiscsUser)
router.get('/:id', getDisc)
router.post('/', validatorSchema(createDiscsSchema, 'body'), cretaDisc)
router.put('/:id', updateDisc)
router.delete('/:id', deleteDisc)

module.exports = router

