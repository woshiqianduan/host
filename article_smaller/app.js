App({
  onLaunch: function() {
    wx.login({
      success: function(res) {
        if (res.code) {
          //发起网络请求
          wx.request({
            url: 'https://fangzhoutest.applinzi.com/api/weichat/login/VerifyWeiChatLoginInfo',
            method:'POST',
            data: {
              JsCode: res.code,
              AppID:'wx77001e1f76f0b68a',
            },
            success:function(res){
                console.log(res)
                   wx.setStorage({
                     key:"sessionKey",
                     data:res.data.DataStruct
                   })
                   wx.showToast({ title: '登录成功', icon: 'success', duration: 2000 });
            },
            fail:function(){
                   wx.showToast({ title: '登录失败', icon: 'loading', duration: 2000 })              
            }
          })
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    });
  }
})