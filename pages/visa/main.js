// pages/visa/main.js
var app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {
    visa: [{
      id: 1,
      name: "马来西亚 EVisa 签证",
      image: "../../images/background.png",
      price: 399,
      link: "../main/main"
    }, ],
    click: false,
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function(options) {
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
    wx.showLoading({
      title: 'Loading',
    })
    if (this.data.click) {
      this.setData({
        click: false,
      })
      var tab = app.globalData.tab;
      var previous = ""
      switch (tab) {
        case (0):
          previous = "../firstpage/main"
          break
        case (2):
          previous = "../guide/main"
          break
        case (3):
          previous = "../support/main"
          break
        case (4):
          previous = "../me/main"
          break
      }
      wx.switchTab({
        url: previous,
      })
    }
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
  onTabItemTap(item) {
    if (!this.data.click) {
      this.setData({
        click: true,
      })
      wx.navigateTo({
        url: '../main/main',
      })
    }
  },
  clickVisa: function(e) {
    var id = e.currentTarget.dataset.id
    console.log(e.currentTarget.dataset.id)
    for (var i = 0; i < this.data.visa.length; i++) {
      if (id == this.data.visa[i].id) {
        var link = this.data.visa[i].link
        wx.navigateTo({
          url: link,
        })
      }
    }
  }
})