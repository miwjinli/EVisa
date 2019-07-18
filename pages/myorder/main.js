// pages/myorder/main.js
var ipadds = "http://10.18.168.195:8082/api/getOrder"
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

Page({

  /**
   * Page initial data
   */
  data: {
    order: [],
    found: false,
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function(options) {
    wx.showLoading({
      title: 'Loading',
      mask: true,
    })
    load(this)
    console.log(this.data.order)
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
    var that = this
    load(that)
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

  },
  cickDetail: function(e) {
    console.log(e.currentTarget.dataset.id)
    for (var i = 0; i < this.data.order.length; i++) {
      if (e.currentTarget.dataset.id == this.data.order[i].id) {
        var order = this.data.order[i];
        var value = JSON.stringify(order);
        wx.navigateTo({
          url: '../myorderdetail/main?source=' + value,
        })
        //wx.showModal({
        //  title: '账单',
        //  content: 'ID: ' + order.id + "\r\nApplied Date: " + order.AppliedDate,
        //})
      }
    }

  }
})

function load(that) {
  if (wx.getStorageSync('nickname')) {
    var id = wx.getStorageSync('nickname')
    wx.request({
      url: ipadds,
      data: {
        id: id,
      },
      success(r) {
        if (r.statusCode == 200) {
          if (r.data.length > 0) {
            var order = r.data
            for (var i = 0; i < order.length; i++) {
              var date = new Date(order[i].AppliedDate)
              order[i].AppliedDate = date.getFullYear() + " " + months[date.getMonth()] + " " + ('0' + date.getDate()).slice(-2) + "\t" + ('0' + date.getHours()).slice(-2) + ":" + ('0' + date.getMinutes()).slice(-2) + ":" + ('0' + date.getSeconds()).slice(-2)
            }
            console.log(order)
            that.setData({
              order: order,
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
  } else {
    wx.hideLoading()
  }
}