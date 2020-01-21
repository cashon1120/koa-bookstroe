{% extends './layout.html' %}
{% block title %} index {% endblock %}
{% block content %}
    <div>
        <div class="success">
            {% if data.code === -1%}
                <h1 class="error">{{data.msg}}</h1>
            {% else %}    
                <h1>{{data.msg}}</h1>
            {% endif %}    
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
            <div id="autoRedirect" style="display: none"><i id="timeLeft">3</i> 后自动跳转...</div>
        </div>
     <div>
     <script>
       const userName = '{{data.username}}'
       const redirectPage = '{{data.redirectPage}}'
       if(userName){
           localStorage.setItem('username', userName)
       }
       if(redirectPage){
           const autoRedirect = $('#autoRedirect')
           const timeLeft = $('#timeLeft')
           autoRedirect.show()
           let time = 3;
           const timer = setInterval(() => {
                --time;
                timeLeft.text(time)
                if(time === 0){
                    clearInterval(timer)
                    window.location.href = redirectPage
                }
           }, 1000)
       }
     </script>
{% endblock %}