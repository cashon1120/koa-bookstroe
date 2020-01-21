const request = require('supertest');
var config = require('../../common/config')

describe('get book/index', function () {
  it('获取列表', function (done) {
    request(config.API_URL)
      .get('book/index&page=' + 1)
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        if(err) return done(error)
        if (res.body.code !== 1) return done('返回错误');
        if (!Array.isArray(res.body.list)) return done('数据格式不正确');
        done();
      });
  });
});

describe('post book/creat', function () {
  it('添加图书', function (done) {
    request(config.API_URL)
      .post('book/create')
      .type('form')
      .send({name: 'supertest', author: 'cashon1120', isbn: '12312DSUOWE209', price: 130, remarks: 'supertest is a super test'})
      .expect(200)
      .end(function (err, res) {
        if(err) return done(error)
        if (res.body.code !== 1) return done('添加失败');
        done();
      });
  });
});

describe('get book/delete', function () {
  it('添加图书', function (done) {
    request(config.API_URL)
      .get('book/delete&id=' + 44)
      .expect(200)
      .end(function (err, res) {
        if (res.body.code !== 1) return done('删除失败, 查看是否传入正确的ID');
        done();
      });
  });
});
