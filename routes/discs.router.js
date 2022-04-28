const express = require("express");
const { getDiscs, getDisc, cretaDisc, updateDisc, deleteDisc, addDiscsUser, getDiscsUser } = require('../controller/discs.controller')
const tokenValidator = require('../middlewares/tokenValidator')
const typeUserValidator = require('../middlewares/typeUserValidator')
const { createDiscsSchema, updateDiscsSchema}  = require('../schemas/discs.schemas')
const { validatorSchema } = require('../middlewares/validatorSchema')
const router = express.Router();

router.get('/', getDiscs)
router.get('/admin', tokenValidator, typeUserValidator, getDiscs)
router.get('/discsUser',tokenValidator, getDiscsUser);
router.post('/addDics',tokenValidator, addDiscsUser)
router.get('/:id', tokenValidator, typeUserValidator, getDisc)
router.post('/', tokenValidator, typeUserValidator, validatorSchema(createDiscsSchema, 'body'), cretaDisc)
router.put('/:id', tokenValidator, typeUserValidator, validatorSchema(updateDiscsSchema, 'body'), updateDisc)
router.delete('/:id', tokenValidator, typeUserValidator, deleteDisc)

module.exports = router

