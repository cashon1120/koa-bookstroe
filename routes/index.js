var router = require('koa-router')();
const {
  getList,
  createData,
  getDetail,
  deleteData
} = require('../controller/book')
const loginCheck = require('../middleware/loginCheck')

// 渲染首页
async function renderIndex(ctx) {
  const result = await getList(ctx)
  await ctx.render('index', {
    data: result
  });
}

// 首页
router.get('/', async (ctx, next) => {
  await renderIndex(ctx)
});

router.get('/index', async (ctx, next) => {
  await renderIndex(ctx)
});

// 新建图书页
router.get('/create', loginCheck, async (ctx) => {
  await ctx.render('create');
});

// 新建/修改图书
router.post('/createBook', loginCheck, async (ctx) => {
  const data = await createData(ctx)
  const {id} = ctx.request.body
  const msg = data.code === 1 ? id ? '修改成功' : '添加成功' : '添加失败'
  await ctx.render('result', {
    data: {
      msg
    }
  });
});

// 更新图书
router.get('/update', loginCheck, async (ctx) => {
  const data = await getDetail(ctx)
  await ctx.render('create', {
    data: data.data
  });
});

// 删除图书
router.get('/delete', loginCheck, async (ctx) => {
  const data = await deleteData(ctx)
  const msg = data.code === 1 ? '删除成功' : '删除失败'
  await ctx.render('result', {
    data: {
      msg
    }
  });
});

// 操作结果
router.get('/result', async (ctx) => {
  await ctx.render('result.swig');
});


module.exports = router;