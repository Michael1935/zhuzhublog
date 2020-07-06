// 进入路由之前要求此用户未登录，如果未登录的话
// 可以继续访问路由，如果已登录，则跳回首页，提示已经登录

exports.checkNotLogin = function (req, res, next) {
  if (req.session.user) {
    res.redirect('/')
  } else {
    next()
  }
}

// 如果要求此路由登录后才能访问，则会判断当前的登录状态 如果已经登录，则正常继续访问
// 如果没有登录，跳转到登录页面
exports.checkLogin = function (req, res, next) {
  if (req.session.user) {
    next()
  } else {
    res.redirect('/user/signin')
  }
}