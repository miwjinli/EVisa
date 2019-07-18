// pages/main/main.js
Page({

  /**
   * Page initial data
   */
  data: {
    login: false,
    child: true,
    student: false,
    freelancer: false,
    professional: false,
    retiree: false,
    unemployed: false,
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function(options) {
    var that = this
    wx.getSetting({
      success: function(res) {
        if (res.authSetting['scope.userInfo']) {
          wx.showLoading({
            title: 'Loading',
            mask: true,
          })
          wx.getUserInfo({
            success: function(res) {
              console.log(res)
              wx.setStorageSync('nickname', res.userInfo.nickName)
              wx.setStorageSync('avatarUrl', res.userInfo.avatarUrl)
              that.setData({
                login: true
              })
              //用户已经授权过
              wx.login({
                success(res) {
                  if (res.code) {
                    wx.request({
                      url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wx618195f6384cfb45&secret=&js_code=' + res.code + '&grant_type=authorization_code',
                      data: {
                        code: res.code
                      },
                      success(r) {
                        console.log(r)
                      },
                      complete(r) {
                        wx.hideLoading()
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
  onReady: function() {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function() {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function() {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function() {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function() {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function() {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function() {

  },
  clickChild: function(event) {
    reset(this);
    this.setData({
      child: true,
    })
  },
  clickStudent: function(event) {
    reset(this);
    this.setData({
      student: true,
    })
  },
  clickFreelancer: function(event) {
    reset(this);
    this.setData({
      freelancer: true,
    })
  },
  clickProfessional: function(event) {
    reset(this);
    this.setData({
      professional: true,
    })
  },
  clickRetiree: function(event) {
    reset(this);
    this.setData({
      retiree: true,
    })
  },
  clickUnemployed: function(event) {
    reset(this);
    this.setData({
      unemployed: true,
    })
  },
  clickSupport: function(event) {
    console.log("support call")
  },
  clickStart: function(event) {
    wx.showLoading({
      title: 'Loading',
    })
    wx.navigateTo({
      url: '../profile/main',
      fail: function() {
        wx.showModal({
          title: 'Failed',
          content: 'Failed to Redirect',
        })
        //fail to redirect
      },
      complete(r) {
        wx.hideLoading()
      }
    })
  },
  onGetUserInfo: function(e) {
    console.log(e)
    if (e.detail.userInfo) {
      wx.setStorageSync('nickname', e.detail.userInfo.nickName)
      wx.setStorageSync('avatarUrl', e.detail.userInfo.avatarUrl)
      wx.navigateTo({
        url: '../profile/main',
      })
      wx.login({
        success(res) {
          if (res.code) {
            wx.request({
              url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wx618195f6384cfb45&secret=&js_code=' + res.code + '&grant_type=authorization_code',
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
  },

})

function reset(that) {
  that.setData({
    child: false,
    student: false,
    freelancer: false,
    professional: false,
    retiree: false,
    unemployed: false,
  })
}