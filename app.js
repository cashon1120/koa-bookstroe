const Koa = require('koa')
const app = new Koa(),
  logger = require('koa-logger'),
  json = require('koa-json'),
  views = require('koa-views'),
  onerror = require('koa-onerror');
const koaBody = require('koa-body');
const swig = require('swig');
const session = require('koa-generic-session')
const redisStore = require('koa-redis')
const {
  REDIS_CONF
} = require('./common/config')

var index = require('./routes/index');
var users = require('./routes/users');
var upload = require('./routes/upload');


// error handler
onerror(app);

swig.setDefaults({
  cache: false,
  ext: 'swig'
})
// global middlewares

app.use(views(__dirname + '/views', {
  extension: 'swig'
}))

app.use(koaBody({
  multipart: true,
  formidable: {
    maxFileSize: 2000 * 1024 * 1024 // 设置上传文件大小最大限制，默认2M
  }
}))

app.use(require('koa-bodyparser')());
app.use(json());
app.use(logger());

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// 404 中间件
app.use(async (ctx, next) => {
  await next();
  if (parseInt(ctx.status) === 404) {
    await ctx.render('error')
  }
})

app.keys = ['sdfaer_rn0@#$']
app.use(session({
  cookie: {
    path: '/',
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000
  },
  store: redisStore({
    all: `${REDIS_CONF.host}:${REDIS_CONF.port}`
  })
}))

app.use(require('koa-static')(__dirname + '/public'));

// 打印请求用时
// app.use(async (ctx, next) => {
//   console.log(`${ctx.method}`, `${ctx.url}`);
//   await next()
//   console.log(`1`);
// })

// routes definition
app.use(index.routes(), index.allowedMethods());
app.use(users.routes(), users.allowedMethods());
app.use(upload.routes(), upload.allowedMethods());

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app;