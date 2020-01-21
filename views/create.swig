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
            <input type="text" class="form-control" iid="isbn" name="isbn" vaLue="{{data.isbn}}">
        </div>
        <div class="form-group">
            <label for="remarks">备注</label>
            <textarea class="form-control" id="remarks" name="remarks">{{data.remarks}}</textarea>
        </div>
       
        <button type="submit" class="btn btn-primary">提交</button>
    </form>

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
    </script>
{% endblock %}