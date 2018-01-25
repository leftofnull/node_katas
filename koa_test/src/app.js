'use strict';

const Koa = require('koa');
const koaBody = require('koa-body');
const api = require('./api');
const app = new Koa();

app.use(koaBody({ jsonLimit: '100kb' }));

// Response Time Header Middleware
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

// Logging Middleware
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.info(`${ctx.method} ${ctx.url} took ${ms}ms`);
});

// Error Handler
app.on('error', (err, ctx) => {
  console.error('server error', err);
  if (ctx) console.error('server error ctx', ctx);
});

app.use(api.routes()).use(api.allowedMethods());

module.exports = app;
