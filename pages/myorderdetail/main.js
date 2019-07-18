// pages/myorderdetail/main.js
var ipadds = "http://10.18.168.195:8082/api/getOrderDetail"
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

Page({

  /**
   * Page initial data
   */
  data: {
    list: null,
    comment: null,
    found: false,
    last: [],
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function(options) {
    wx.showLoading({
      title: 'Loading',
      mask: true,
    })
    var that = this
    var value = JSON.parse(decodeURIComponent(options.source))
    console.log(value)
    that.setData({
      list: value
    })
    load(that)
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
    wx.showLoading({
      title: 'Loading',
      mask: true,
    })
    load(this)
    wx.stopPullDownRefresh()
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

  }
})

function load(that) {
  wx.request({
    url: ipadds,
    data: {
      id: that.data.list.id,
    },
    success(r) {
      if (r.statusCode == 200) {
        if (r.data.length > 0) {
          var comments = r.data
          for (var i = 0; i < comments.length; i++) {
            var date = new Date(comments[i].CommentDate)
            comments[i].CommentDate = date.getFullYear() + " " + months[date.getMonth()] + " " + ('0' + date.getDate()).slice(-2) + "\t" + ('0' + date.getHours()).slice(-2) + ":" + ('0' + date.getMinutes()).slice(-2) + ":" + ('0' + date.getSeconds()).slice(-2)
          }
          var newlength = comments.length - 1
          var last = comments[newlength]
          console.log(last)
          delete comments[newlength]
          comments.length = newlength
          console.log(comments)
          that.setData({
            last: last,
            comment: comments,
            found: true
          })
        }
      }
      wx.hideLoading()
    },
    complete(r) {
      wx.hideLoading()
    }
  })
}