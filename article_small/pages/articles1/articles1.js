Page({
  onLoad: function(options) {
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
  data:{
    article_title: [{name:"我的美丽你的最爱",src:"../images/a.jpg"},{name:"终于等到你",src:"../images/a.jpg"},{name:"我的美丽你的最爱",src:"../images/a.jpg"},{name:"我的美丽你的最爱",src:"../images/a.jpg"}]
  }
})