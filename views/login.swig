{% extends './layout.html' %}
{% block title %} 登录 {% endblock %}
{% block content %}
    <div>
        {% if redirectPage %}
        <div class="form-tips">
            <div class="alert alert-danger" role="alert">
            该操作需要登录, 请先登录!
            </div>
        </div>
        {% endif %}
        <form class="form-login" method="post" action="/user/loginIn">
            <input type="hidden" name="redirectPage" value="{{redirectPage}}">
            <div class="form-group">
                <label for="username">账号</label>
                <input type="text" class="form-control" name="username" id="username" aria-describedby="emailHelp" value="admin">
                <small id="emailHelp" class="form-text text-muted">请输入账号和密码(admin: 111111)</small>
            </div>
            <div class="form-group">
                <label for="password">密码</label>
                <input type="password" class="form-control" name="password" id="password" value="111111">
            </div>
            <button type="submit" class="btn btn-primary">登录</button>
        </form>
    </div>
{% endblock %}