const router = require('koa-router')()

const {
  SuccessModel,
  ErrorModel
} = require('../model/resModel')
const {
  uploadFile
} = require('../controller/upload')

router.post('/upload', async function (ctx, next) {
  const data = await uploadFile(ctx)
  if (data) {
    ctx.body = new SuccessModel(data, '上传成功')
    return
  }
  ctx.body = new ErrorModel('上传失败')
})

module.exports = router
