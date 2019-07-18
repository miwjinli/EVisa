// pages/me/main.js
var app = getApp()
Page({

  /**
   * Page initial data
   */
  data: {
    login: false,
    user: "未登录",
    imagepath: '../../images/passport-size-photo.jpg',
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    if(wx.getStorageSync('nickname')){
      this.setData({
        login: true,
        user: wx.getStorageSync('nickname'),
        imagepath: wx.getStorageSync('avatarUrl'),
      })
    }
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
  onGotUserInfo:function(e){
    console.log(e.detail)
    if(e.detail.userInfo){
      console.log(e.detail.userInfo.avatarUrl)
      console.log(e.detail.userInfo.nickName)
      wx.setStorageSync('nickname', e.detail.userInfo.nickName)
      wx.setStorageSync('avatarUrl', e.detail.userInfo.avatarUrl)
      this.setData({
        user: e.detail.userInfo.nickName,
        imagepath: e.detail.userInfo.avatarUrl,
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
  clickOrder:function(e){
    wx.navigateTo({
      url: '../myorder/main',
    })
  },
  clickAboutUs: function (e) {
    wx.showModal({
      title: '关于我们',
      content: '我们是马来西亚移民局认可的电子签证代理人',
      showCancel: false,
    })
  },
  onTabItemTap(item) {
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
    app.globalData.tab = item.index;
  },
})