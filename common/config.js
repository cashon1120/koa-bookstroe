const env = process.env.NODE_ENV // 环境变量

let API_URL, REDIS_CONF
if (env === 'dev') {
  REDIS_CONF = {
    port: 6379,
    host: '127.0.0.1'
  }
  API_URL = 'http://localhost/basic/web/index.php?r='
}

if (env === 'production') {
  REDIS_CONF = {
    port: 6379,
    host: '127.0.0.1'
  }
  API_URL = 'http://localhost:8080/basic/web/index.php?r='
}


module.exports = {
  API_URL,
  REDIS_CONF
}

