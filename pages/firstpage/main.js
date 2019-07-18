// pages/firstpage/main.js
var app = getApp()
Page({

  /**
   * Page initial data
   */
  data: {
    imageheight: 0,
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    wx.clearStorage();
    //check sdk
    const version = wx.getSystemInfoSync().SDKVersion
    if (compareVersion(version, '2.7.0') >= 0) {
    } else {
      // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
      wx.showModal({
        title: 'Warning',
        content: 'SDK Version is too low，please upgrade it.',
        showCancel: false,
        confirmText: "OK",
        complete() {
          wx.navigateBack({
            delta: 1,
          })
        }
      })
    }

    var that = this
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          imageheight: res.windowHeight * 0.5
        })
      },
    })
    console.log(this.data.imageheight)

    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: function (res) {
              console.log(res)
              wx.setStorageSync('nickname', res.userInfo.nickName)
              wx.setStorageSync('avatarUrl', res.userInfo.avatarUrl)
              //用户已经授权过
              wx.login({
                success(res) {
                  if (res.code) {
                    wx.request({
                      url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wx618195f6384cfb45&secret=&js_code=' + res.code+ '&grant_type=authorization_code',
                      data: {
                        code: res.code
                      },
                      success(r) {
                        console.log(r)
                      }
                    })
                  }
                }
              })
            }
          })
        }
      }
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  },
  clickProceed: function (event) {
    wx.navigateTo({
      url: '../main/main',
      fail: function () {
        wx.showModal({
          title: 'Failed',
          content: 'Failed to Redirect',
        })
        //fail to redirect
      }
    })
  },
  clickMain: function (event) {
    wx.redirectTo({
      url: '../firstpage/main',
      fail: function () {
        wx.showModal({
          title: 'Failed',
          content: 'Failed to Redirect',
        })
        //fail to redirect
      }
    })
  },
  clickVisa: function (event) {
    wx.switchTab({
      url: 'pages/firstpage/index',
      fail: function () {
        wx.showModal({
          title: 'Failed',
          content: 'Failed to Redirect',
        })
        //fail to redirect
      }
    })
  },
  onTabItemTap(item) {
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
    app.globalData.tab = item.index;
  },
})

function compareVersion(v1, v2) {
  v1 = v1.split('.')
  v2 = v2.split('.')
  const len = Math.max(v1.length, v2.length)

  while (v1.length < len) {
    v1.push('0')
  }
  while (v2.length < len) {
    v2.push('0')
  }

  for (let i = 0; i < len; i++) {
    const num1 = parseInt(v1[i])
    const num2 = parseInt(v2[i])

    if (num1 > num2) {
      return 1
    } else if (num1 < num2) {
      return -1
    }
  }

  return 0
}
