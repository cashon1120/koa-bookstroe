const Rize = require('rize')
var assert = require('assert')

const rize = new Rize()

describe('首页测试', async () => {
  let page = null
  before(()=> {
    page = rize.goto('http://localhost/')
  });
  it('首页标题为: 首页', async () => {
    page.assertTitle('首页')
  })
  it('导航栏目有: 图书列表 和 添加图书', async () => {
    page.assertSeeIn('nav', '图书列表').assertSeeIn('nav', '添加图书')
  })

  after(() => {
    page.end()
  })
})