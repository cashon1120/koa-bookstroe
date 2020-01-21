const Rize = require('rize')
const rize = new Rize()

describe('添加图书页面测试', async () => {
  let page = null
  before(()=> {
    page = rize.goto('http://localhost/create')
  });
  it('标题为: 新建图书', async () => {
    page.assertTitle('新建图书')
  })

  after(() => {
    page.end()
  })
})