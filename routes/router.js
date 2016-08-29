var User = require('./controllers/user');         // 登陆等出
var Admin = require('./controllers/admin');         // 仪表盘
var Blog = require('./controllers/blog');         // 仪表盘
var Category = require('./controllers/category');         // 仪表盘

module.exports= function(app) {

  app.get('/', function(req, res) {
    res.render('index', {
      title:  "欢迎来到嘉兴盛驰企业管理",
      subheading: "盛大企业，驰骋未来！盛驰，让企业经营更便捷!"
    })
  })
  app.get('/about', function(req, res) {
    res.render('about', {
      title:  "关于中拓",
      subheading: "盛大企业，驰骋未来！盛驰，让企业经营更便捷!"
    })
  })
  app.get('/service', function(req, res) {
    res.render('service', {
      title:  "服务项目",
      subheading: "高效快捷办理针对于企业各项需求一站式服务丰富的招聘资源，优越的融资渠道，为企业发展提供最有力的支持与帮助"
    })
  })
  app.get('/news', function(req, res) {
    res.render('news', {
      title:  "新闻资讯",
      subheading: "高效快捷办理针对于企业各项需求一站式服务丰富的招聘资源，优越的融资渠道，为企业发展提供最有力的支持与帮助"
    })
  })
  app.get('/contact', function(req, res) {
    res.render('contact', {
      title:  "联系我们",
      subheading: "更好的为您服务"
    })
  })
  // end

  // 登录登出
  app.get('/login', User.loginPage)
  app.post('/login', User.login)
  app.get('/logout', User.logout);

  // 后台界面
  app.get('/admin', Admin.adminPanel)

  // 新闻博客
  app.get('/admin/blog',Blog.new)
  app.post('/admin/blog',Blog.saveBlogImg, Blog.saveBlog)
  app.delete('/admin/blog',Blog.removeBlog)

  // 新闻分类
  app.get('/admin/category',Category.new)
  app.post('/admin/category',Category.saveCategory)
  app.delete('/admin/category',Category.removeCategory)


}
