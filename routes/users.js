var router = require('koa-router')();
const {
  userLogin,
  userLogout
} = require('../controller/user')
const {setQueryString} = require('../utils/util.js')

router.prefix('/user');

router.get('/login', async (ctx) => {
  const {
    redirectPage
  } = ctx.query
  await ctx.render('login', {
    redirectPage
  });
});

// 登录
router.post('/loginIn', async (ctx) => {
  const result = await userLogin(ctx)
  const {
    username,
    redirectPage
  } = result
  const msg = username ? `欢迎 ${username}, 登录成功` : '账号或密码不正确'
  const type = username ? '' : 3
  (`/result?${queryStr}`);
  const queryStr = setQueryString({type, msg, username, redirectPage})
  await ctx.redirect(`/result?${queryStr}`);
});

// 退出
router.get('/logout', async (ctx, next) => {
  await userLogout(ctx, next)
  await ctx.render('login');
});

module.exports = router;