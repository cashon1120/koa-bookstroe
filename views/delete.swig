{% extends './layout.html' %}
{% block title %} index {% endblock %}
{% block content %}
    <div>
        <div class="success">
        <h1>恭喜,操作成功!</h1>
        <div>
            <a class="btn btn-primary" href="/create">添加图书</a>
            <a class="btn btn-primary" href="/index">返回列表</a>
        </div>
        </div>
     <div>
{% endblock %}