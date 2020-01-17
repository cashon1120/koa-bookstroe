{% extends './layout.html' %}
{% block title %} index {% endblock %}
{% block content %}
    <div>
        <div class="success">
        <h1>{{data.msg}}</h1>
        {% if data.type === 3 %}
            <div>
                <a class="btn btn-primary" href="/login">重新登录</a>
            </div>
        {% else %}
            <div>
                <a class="btn btn-primary" href="/create">添加图书</a>
                <a class="btn btn-primary" href="/index">返回列表</a>
            </div>
        {% endif %}    
        </div>
     <div>
     <script>
       const userName = '{{data.username}}'
       if(userName){
           localStorage.setItem('username', userName)
       }
     </script>
{% endblock %}