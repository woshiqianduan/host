
var app = getApp()
Page({
  data: {
    winWidth: 0,
    winHeight: 0,
    currentTab: 0
  },

  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    var _this = this


    wx.getStorage({
      key: 'sessionKey',
      success: function (res) {
      //  console.log(res.data)
        _this.setData({
          sessionKey: res.data
        })

        // wx.request({
        //   url: 'https://fangzhoutest.applinzi.com/api/weichat/content/GetArticleInfoByEditorRecommend?Token=' + _this.data.sessionKey,
        //   success: function (res) {
        //     // wx.showToast({ title: '登录成功', icon: 'loading', duration: 2000 });
        //     // console.log(res);
        //     wx.setStorageSync('sessionKey', res.data.sessionKey);
        //     wx.showToast({ title: '登录成功', icon: 'success', duration: 2000 });
        //   },
        //   fail: function () {
        //     wx.showToast({ title: '登录失败', icon: 'loading', duration: 2000 })
        //   }
        // })
      },
      fail: function () {
     
      }
    })


    // wx.getStorage({
    //   key: 'sessionKey',
    //   success: function (res) {
    //     _this.setData({
    //       sessionKey: res.data
    //     })
    //   // console.log(_this.data.sessionKey)
    //     wx.request({
    //       url: 'https://fangzhoutest.applinzi.com/api/weichat/content/GetArticleInfoByEditorRecommend?'+_this.data.sessionKey,
    //       success: function (res) {
    //         // wx.showToast({ title: '登录成功', icon: 'loading', duration: 2000 });
    //         // console.log(res);
    //         wx.setStorageSync('sessionKey', res.data.sessionKey);
    //         wx.showToast({ title: '登录成功', icon: 'success', duration: 2000 });
    //       },
    //       fail: function () {
    //         wx.showToast({ title: '登录失败', icon: 'loading', duration: 2000 })
    //       }
    //     })
    //   }
    // })


    wx.getSystemInfo({
      success: function (res) {
        _this.setData({
          winHeight: res.windowHeight
        })
      }
    })
  },
  //滑动切换
  swiperTab: function (e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },
  //点击切换
  clickTab: function (e) {
    //console.log(currentTab);
    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  }

})