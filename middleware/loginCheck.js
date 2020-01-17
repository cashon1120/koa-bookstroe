var router = require('koa-router')();
module.exports = async (ctx, next) => {
  if(ctx.session.username){
    await next()
    return
  }
  await ctx.render('login', {
    type: 'notLogin'
  })
}