var router = require('koa-router')();
const {
  userLogin, userLogout} = require('../controller/user')

router.prefix('/login');

router.get('/', async (ctx) => {
  await ctx.render('login');
});

// 登录
router.post('/loginIn', async (ctx) => {
  const username = await userLogin(ctx)
  const msg = username ? `欢迎 ${username}, 登录成功` : '账号或密码不正确'
  await ctx.render('result', {
    data: {
      type: username ? '' : 3,
      msg,
      username
    }
  });
});

// 退出
router.get('/logout', async (ctx, next) => {
  await userLogout(ctx, next)
  await ctx.render('login');
});

module.exports = router;
