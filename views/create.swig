{% extends './layout.html' %}
{% block title %}新建图书{% endblock %}
{% block content %}
<script src="https://cdn.bootcss.com/bootstrap-validator/0.5.3/js/bootstrapValidator.min.js"></script>
<link href="https://cdn.bootcss.com/bootstrap-validator/0.5.3/css/bootstrapValidator.min.css" rel="stylesheet">
    <form id="addForm" class="form-login" method="post" action="/createBook">
        <input type="hidden" name="id" value="{{data.id}}">
        <div class="form-group">
            <label for="name">书名</label>
            <input type="text" class="form-control" id="name" name="name" vaLue="{{data.name}}">
        </div>
        <div class="form-group">
            <label for="author">作者</label>
            <input type="text" class="form-control" id="author" name="author" vaLue="{{data.author}}">
        </div>
        <div class="form-group">
            <label for="price">价格</label>
            <input type="text" class="form-control" id="price" name="price" vaLue="{{data.price}}">
        </div>
        <div class="form-group">
            <label for="ISBN">ISBN</label>
            <input type="text" class="form-control" id="isbn" name="isbn" vaLue="{{data.isbn}}">
        </div>
         <div class="form-group">
            <label for="file">封面图</label>
            <div>
            {% if data.id %}
               <img style="display: inline-block; width: 50px; height: 50px;" src="{{data.pic}}" id="picUrl" />
            {% else %}
               <img style="display: none; width: 50px; height: 50px;" src="{{data.pic}}" id="picUrl" /> 
            {% endif %}   
            <input type="file" style="display:inline-block; width: 50%;" name="file" id="file" class="form-control-file" accept="image/png,image/gif,image/jpeg">
            <input type="hidden" name="pic" id="pic" value="">
            </div>
         </div>
        <div class="form-group">
            <label for="remarks">备注</label>
            <textarea class="form-control" id="remarks" name="remarks">{{data.remarks}}</textarea>
        </div>
       
        <button type="submit" class="btn btn-primary">提交</button>
    </form>

   <script src="https://cdn.bootcss.com/axios/0.19.0-beta.1/axios.js"></script>
    <script>
    $("#addForm").bootstrapValidator({
      fields: {
         name: {
            message: '名称验证失败',
            validators: {
               notEmpty: {
                  message: '名称不能为空'
               }
            }
         },
         author: {
            message: '作者验证失败',
            validators: {
               notEmpty: {
                  message: '作者不能为空'
               }
            }
         },
         price: {
            message: '价格验证失败',
            validators: {
               notEmpty: {
                  message: '价格不能为空'
               }
            }
         },
         isbn: {
            message: 'ISBN验证失败',
            validators: {
               notEmpty: {
                  message: 'ISBN不能为空'
               }
            }
         },
          file: {
            message: '封面图验证失败',
            validators: {
               notEmpty: {
                  message: '请上传封面图'
               }
            }
         },
         remarks: {
            message: '备注验证失败',
            validators: {
               notEmpty: {
                  message: '备注不能为空'
               }
            }
         }
      }
    })

    $('#file').on('change', e => {
       var params = new FormData();
       params.append('file',e.target.files[0])
       axios.post('http://localhost/upload',params, {headers:{'Content-Type':'multipart/form-data'}}).then(res => {
          const url = res.data.data.url
          $('#pic').val(url)
          $('#picUrl').show().attr('src', url)
       })
    })  

    </script>
{% endblock %}