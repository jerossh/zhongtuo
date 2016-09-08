(function($){
  $(document).ready(function(){

    // 所有的内容都写在这里
    // 地址栏变量放在这里
    var pathname = location.pathname
    var hash = location.hash

    // 登陆页
    // 登录页面用户名不存在事件
    if (pathname == "/login")
        if (hash == "#err") {
          $('.alert-danger').show();
          $(".alert-danger .close").click(function() {
            location.hash = ""
          })
        }
    // 密码事件
    var inputPass = $('.form-password-1')
    var relPass = $('.form-password-2')

    // keyup keycode输出都是大写，charcode都是0
    inputPass.keypress(function(e){
      var charCode = e.charCode;
      e.preventDefault();
      inputPass.val(inputPass.val() + '*');
      relPass.val(relPass.val()+String.fromCharCode(charCode))
    })
    //登陆页结束


    // 导航部分
    // 当前导航激活状态
    $("#sidebar_left .nav.sidebar-menu>li>a[href='" + pathname + "']" ).parent().addClass('active');

    // 导航宽度缩放
    function changeNav(){
      var panelWidth = $('#panel-wrap').width();
      var countNav = $('.sidebar-left-content>.nav>li').length;
      console.log(countNav);
      $('.nav>li>a').css('width', panelWidth/countNav);
      $('body.sb-top #sidebar_left .sidebar-menu > li > ul').css('width', panelWidth/countNav);
    }
    // 函数节流
    function throtle(method, context) {
      clearInterval(method.tid)
      method.tid = setInterval(function(){
        method.call(context)
      }, 100)
    }
    $(window).resize(function(){
      throtle(changeNav)
    })
    // 导航部分结束


    // 表格列表功能
    // 提交功能
    $('button[type="submit"]').on('submit', function() {
      $(this).prop("disabled", true)
    })

    // 删除功能
    $('.del').click(function(e) {
      var target = $(e.target)
      var id = target.data('id')
      var item = $('.item-id-' + id.split('.')[0])
      var delUrl = pathname + '?id='

      $.ajax({
        type: 'DELETE',
        url: delUrl + id
      }).done(function(result){
        if (result.success == 1) {
            if(item.length > 0) {
              item.remove()
            }
        }
      })
    })

    // 修改功能
    $('.change').click(function(e) {
      var target = $(e.target)
      var id = target.data('id')
      location.search = "?id=" + id
    })

    // 查看博客
    $('.view_blog').click(function(e) {
      var target = $(e.target)
      var id = target.data('id')
      var url = "/blog/article" + "?id=" + id
      window.open(url)
    })

    // 博客类别点击显示，用 css 兄弟选择服解决了
    // $('.mt-checkbox>span').click(function(){
    //   $(this).parent().addClass('after')
    //   console.log('f');
    // })


  // js这里结束
  })
})(jQuery)
