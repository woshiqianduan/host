Page({
  formReset: function() {
    console.log('form发生了reset事件')
  },
  onLoad: function(options) {
    var _this = this;
    wx.getSystemInfo({
      success: function (res) {
        _this.setData({
          winHeight: res.windowHeight
        })
        //console.log(res.windowHeight)
        // console.log(res.model)
        // console.log(res.pixelRatio)
        // console.log(res.windowWidth)
        // console.log(res.windowHeight)
        // console.log(res.language)
        // console.log(res.version)
      }
    })
  },
  openConfirm: function () {
        wx.showModal({
            title: '弹窗标题',
            content: '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内',
            confirmText: "主操作",
            cancelText: "辅助操作",
            success: function (res) {
                console.log(res);
                if (res.confirm) {
                    console.log('用户点击主操作')
                }else{
                    console.log('用户点击辅助操作')
                }
            }
        });
    },
    openAlert: function () {
        var _this = this;
        wx.showModal({
            content: '提交信息成功，点击继续阅读',
            showCancel: false,
            success: function (res) {
                if (res.confirm) {
                   
                }
            }
        });
    }
})