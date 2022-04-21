const express = require('express')
const discsRouter = require('./discs.router.js')
const viewsRouter = require('./vistas.router.js')
const usersRouter = require('./users.router.js')

const routerApi = (app) => {
  const router = express.Router();
  app.use('/', viewsRouter);
  app.use('/api/v1', router);
  router.use('/discs', discsRouter);
  router.use('/users', usersRouter);
}

module.exports = routerApi