var axios = require('axios')
var qs = require('qs')
var config = require('../common/config')

// 获取列表
const getList = async (ctx) => {
  const {
    page
  } = ctx.query
  const url = config.API_URL + 'book/index&page=' + page
  let result = {}
  await axios.get(url).then(res => {
    let totalPage = Math.ceil(res.data.pageInfo.totalCount / res.data.pageInfo.defaultPageSize)
    let pageArr = []
    for (let i = 0; i < totalPage; i++) {
      pageArr.push(i + 1)
    }
    result = res.data
    result.totalPage = pageArr
    result.currentPage = page || 1
  })
  return result
}

// 新建数据
const createData = async (ctx) => {
  const { id, name, author, price, isbn, remarks} = ctx.request.body
  let result = {}
  const url = config.API_URL + 'book/create' 
  const params = {id, name, author, price, isbn, remarks}
  await axios.post(url, qs.stringify(params)).then(res => {
    result = res.data
  })
  return result
}

// 删除数据
const deleteData = async (ctx) => {
  const {
    id
  } = ctx.query
  let result = {}
  const url = config.API_URL + 'book/delete&id=' + id
  await axios.get(url).then(res => {
    result = res.data
  })
  return result
}

// 获取详情
const getDetail = async (ctx) => {
  const {
    id
  } = ctx.query
  let result = {}
  const url = config.API_URL + 'book/create&id=' + id
  await axios.get(url).then(res => {
    console.log(res.data)
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