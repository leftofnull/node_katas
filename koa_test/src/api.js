'use strict';

const config = require('../config/config');
const router = require('koa-router')();
const people = require('./people/api')(config);
const person = require('./person/api')(config);

router.get('/', ctx => {
  ctx.body = 'no-op';
  ctx.status = 202;
});

router.use('/people', people.routes(), people.allowedMethods());
router.use('/person', person.routes(), person.allowedMethods());

module.exports = router;
