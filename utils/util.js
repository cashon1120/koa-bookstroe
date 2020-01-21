function setQueryString(obj){
  let queryStr = ''
  for(let key in obj){
    queryStr+=`${key}=${obj[key]}&`
  }
  queryStr=queryStr.replace(/\&$/, '')
  return queryStr
}

module.exports = { setQueryString }