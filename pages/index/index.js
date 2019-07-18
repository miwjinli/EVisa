//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    country: {
      bangladesh: '../../images/bangladesh.png',
      bhutan: '../../images/bhutan.png',
      china: '../../images/china.png',
      india: '../../images/india.png',
      montenegro: '../../images/montenegro.png',
      nepal: '../../images/nepal.png',
      pakistan: '../../images/pakistan.png',
      serbia: '../../images/serbia.png',
      srilanka: '../../images/srilanka.png',
    }
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
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
  },
  onShow: function (e) {
    console.log('show')
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  setContinue: function (e) {
    wx.showLoading({
      title: 'Loading',
      mask: true,
    })
    // for testing
    //wx.redirectTo({
    //  url: '../profile/main',
    //})
    wx.login({
      success(res) {
        if (res.code) {
          wx.getUserInfo({
            success(e) {
              wx.setStorageSync('nickname', e.userInfo.nickName)
              wx.switchTab({
                url: '../firstpage/main',
                fail: function () {
                  wx.hideLoading()
                  wx.showModal({
                    title: 'Failed',
                    content: 'Failed to Redirect',
                  })
                  //fail to redirect
                }
              })
            }

          })
        } else {
          console.log('登录失败！' + res.errMsg)
          wx.hideLoading()
          wx.showToast({
            title: 'Fail to Login',
          })
          wx.reLaunch({
            url: '../index/index',
          })
        }
      },
      fail(res) {
        wx.hideLoading()
        wx.showToast({
          title: 'Fail to Login',
        })
        wx.reLaunch({
          url: '../index/index',
        })
      }

    })
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
