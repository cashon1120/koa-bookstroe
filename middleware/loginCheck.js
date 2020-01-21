module.exports = async (ctx, next) => {
  if(ctx.session.username){
    await next()
    return
  }
  await ctx.redirect('/user/login?redirectPage=' + ctx.url)
}