'use strict';

const router = require('koa-router')();

module.exports = function people(options) {
  router.get('/', async ctx => {
    ctx.body = options.people;
  });

  return router;
};
