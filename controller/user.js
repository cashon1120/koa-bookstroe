const userLogin = async (ctx) => {
  const { username, password} = ctx.request.body
  let result = ''
  if (username === 'admin' && password === '111111') {
    ctx.session.username = username
    result = username
  }
  return result
}

const userLogout = async (ctx, next) => {
  ctx.session.username = null
  next()
}

module.exports = {
  userLogin,
  userLogout
}