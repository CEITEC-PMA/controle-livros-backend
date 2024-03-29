const express = require('express');
const titleRoute = require('./title.route');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const turmaRoute = require('./turma.route');
const unidadeRoute = require('./unidade.route');
const docsRoute = require('./docs.route');
const config = require('../../config/config');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/',
    route: titleRoute,
  },
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/turma',
    route: turmaRoute,
  },
  {
    path: '/unidade',
    route: unidadeRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
