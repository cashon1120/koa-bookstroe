{% extends './layout.html' %}
{% block title %}首页{% endblock %}
{% block content %}
    <div>
        <table  cellspacing="0">
            <tr>
                <th width="30">id</th>
                <th>书名</th>
                <th>作者</th>
                <th>ISBN</th>
                <th>价格</th>
                <th>描述</th>
                <th>上传时间</th>
                <th width="150">操作</th>
            </tr>
    
            {% for item in data.list %}
                <tr>
                    <td>{{item.id}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.author}}</td>
                    <td>{{item.price}}</td>
                    <td>{{item.isbn}}</td>
                    <td>{{item.remarks}}</td>
                    <td>{{item.create_time}}</td>
                    <td><a href="/update?id={{item.id}}">修改</a><a href="javascript:" class="delete" data-id="{{item.id}}">删除</a></td>
                </tr>
            {% endfor %}
         </table>
         <ul class="page">
            {% for item in data.totalPage %}
                {% if item == data.currentPage %}
                    <li><a class="active">{{item}}</a></li>
                {% else %}
                    <li><a href="/index?page={{item}}">{{item}}</a></li>
                {% endif %}    
            {% endfor %}
         </ul>
     <div>

     <div class="modal" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="exampleModalLabel">系统提示</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            </div>
            <div class="modal-body">
                <form>
                <div class="form-group">
                    <label for="message-text" class="control-label">确定要删除该数据吗？</label>
                </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">返回</button>
                <button type="button" class="btn btn-primary" id="deleteBtn">确认</button>
            </div>
            </div>
        </div>
        </div>

        <script>
            window.onload = function() {
                $('.delete').on('click', function(e) {
                    const id = e.currentTarget.dataset.id
                    $('#deleteModal').modal();
                    $('#deleteBtn').one('click', function() {
                        window.location.href = "/delete?id=" + id
                    });
                })
            }
        </script>
{% endblock %}

