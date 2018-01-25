'use strict';

const router = require('koa-router')();

module.exports = function people(options) {
  router.post('/', async ctx => {
    const highestId = options.people
      .map(p => p.id)
      .sort()
      .pop();

    const newPeron = { id: highestId + 1, name: ctx.request.body.name };
    options.people.push(newPeron);

    ctx.body = newPeron;
    ctx.status = 201;
  });

  router.get('/:id', async ctx => {
    const p = options.people.find(p => p.id === parseInt(ctx.params.id, 10));
    if (!p) return (ctx.status = 404);
    ctx.body = p;
  });

  router.put('/:id', async ctx => {
    options.people.forEach(p => {
      if (p.id === parseInt(ctx.params.id, 10)) p.name = ctx.request.body.name;
    });
    ctx.status = 200;
  });

  router.delete('/:id', async ctx => {
    const p = options.people.find(p => p.id === parseInt(ctx.params.id, 10));
    options.people.splice(options.people.indexOf(p), 1);
    ctx.status = 200;
  });

  return router;
};
