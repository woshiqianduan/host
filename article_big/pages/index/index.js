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
    wx.getSystemInfo({
      success: function (res) {
        _this.setData({
          winHeight: res.windowHeight
        })
        console.log(res.windowHeight)
        // console.log(res.model)
        // console.log(res.pixelRatio)
        // console.log(res.windowWidth)
        // console.log(res.windowHeight)
        // console.log(res.language)
        // console.log(res.version)
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