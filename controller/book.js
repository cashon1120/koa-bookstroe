var qs = require('qs')
var http = require('../utils/request.js')
var {SuccessModel, ErrorModel} = require('../model/resModel')

// 获取列表
const getList = async (ctx) => {
  const {
    page
  } = ctx.query
  let result = {}
  await http.get('book/index&page=' + page).then(res => {
    let totalPage = Math.ceil(res.data.pageInfo.totalCount / res.data.pageInfo.defaultPageSize)
    let pageArr = []
    for (let i = 0; i < totalPage; i++) {
      pageArr.push(i + 1)
    }
    result = res.data
    result.totalPage = pageArr
    result.currentPage = page || 1
  }).catch(() => {
    return new ErrorModel()
  })
  return new SuccessModel(result)
}

// 新建数据
const createData = async (ctx) => {
  const { id, name, author, price, pic, isbn, remarks} = ctx.request.body
  let result = {}
  const url = 'book/create' 
  const params = {id, name, author, price, pic, isbn, remarks}
  await http.post(url, qs.stringify(params)).then(res => {
    result = res.data
    if(result.code === 1){
      result = new SuccessModel()
    }else{
      result = new ErrorModel()
    }
  })
  return result
}

// 删除数据
const deleteData = async (ctx) => {
  const {
    id
  } = ctx.query
  let result = {}
  const url = 'book/delete&id=' + id
  await http.get(url).then(res => {
    result = res.data
    if(result.code === 1){
      result = new SuccessModel()
    }else{
      result = new ErrorModel()
    }
  })
  return result
}

// 获取详情
const getDetail = async (ctx) => {
  const {
    id
  } = ctx.query
  let result = {}
  const url = 'book/create&id=' + id
  await http.get(url).then(res => {
    result = res.data
  })
  return result
}

module.exports = {
  getList,
  createData,
  getDetail,
  deleteData
}