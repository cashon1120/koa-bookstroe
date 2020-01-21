const fs = require('fs');
const path = require('path')

const uploadFile = async (ctx) => {
  let result = {}

  const file = ctx.request.files.file;
  // 创建可读流
  const render = fs.createReadStream(file.path);
  const fileName = Date.now().toString()
  let filePath = path.join(__dirname, '../public/upload/', fileName + '.' + file.name.split('.').pop());
  const fileDir = path.join(__dirname, '../public/upload/');
  if (!fs.existsSync(fileDir)) {
    fs.mkdirSync(fileDir, err => {
      console.log(err)
    });
  }
  // 创建写入流
  const upStream = fs.createWriteStream(filePath);
  render.pipe(upStream);
  result={
    url: `/upload/` + fileName + '.' + file.name.split('.').pop()
  }
  return result
}
module.exports = {
  uploadFile
}