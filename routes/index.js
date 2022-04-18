const discsRouter = require('./discs.router.js')
const viewsRouter = require('./vistas.router.js')

const routerApi = (app) => {
  app.use('/', viewsRouter);
  app.use('/discs', discsRouter);
}

module.exports = routerApi