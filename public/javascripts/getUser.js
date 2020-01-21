(function () {
  const username = localStorage.getItem('username')
  $('#loginOut').click(() => {
    localStorage.removeItem('username')
    window.location.href = '/user/logout'
  })
  window.addEventListener('load', () => {
    if (username) {
      $('#noLogin').hide()
      $('#isLogin').show()
      $('#userName').text(username)
    }
  })
})()