// pages/passport/main.js
Page({

  /**
   * Page initial data
   */
  data: {
    back: '../../images/passport-back.png',
    front: '../../images/passport-front.png',
    gallery: "../../images/gallery.jpg",
    camera: "../../images/camera.jpg",
    upload1: false,
    upload2: false,
    menufront: true,
    menuback: true,
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    //wx.startPullDownRefresh()
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
    var temp1 = wx.getStorageSync('passport_front')
    if (temp1) {
      this.setData({
        upload1: true,
        front: wx.getStorageSync('passport_front'),
      })
    }
    var temp2 = wx.getStorageSync('passport_back')
    if (temp2) {
      this.setData({
        upload2: true,
        back: wx.getStorageSync('passport_back'),
      })
    }
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
    console.log('unload')
  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {
    var temp1 = wx.getStorageSync('passport_front')
    if (temp1) {
      this.setData({
        upload1: true,
        front: wx.getStorageSync('passport_front'),
      })
    }
    var temp2 = wx.getStorageSync('passport_back')
    if (temp2) {
      this.setData({
        upload2: true,
        back: wx.getStorageSync('passport_back'),
      })
    }
    wx.stopPullDownRefresh()
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

  setUploadFront: function (e) {
    wx.chooseImage({
      count: 1,
      sizeType: ['original'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        var tempFilePaths = res.tempFilePaths
        //for testing,saving image
        //wx.saveImageToPhotosAlbum({
        //  filePath: tempFilePaths,
        //})
        wx.setStorageSync('passport_front', tempFilePaths)
        wx.startPullDownRefresh()
      },
    })
  },

  setUploadBack: function (e) {
    var that = this
    wx.chooseImage({
      count: 1,
      sizeType: ['original'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        var tempFilePaths = res.tempFilePaths
        //for testing,saving image
        //wx.saveImageToPhotosAlbum({
        //  filePath: tempFilePaths,
        //})
        wx.setStorageSync('passport_back', tempFilePaths)
        //wx.startPullDownRefresh()
        that.setData({
          upload2: true,
          back: wx.getStorageSync('passport_back'),
        })
      },
    })
  },

  setContinue: function (e) {
    wx.navigateTo({
      url: '../others/main',
    })
  },

  clickfront: function (e) {
    var that = this
    wx.chooseImage({
      count: 1,
      sizeType: ['original'],
      sourceType: ['album'],
      success: function (res) {
        var tempFilePaths = res.tempFilePaths
        //for testing,saving image
        //wx.saveImageToPhotosAlbum({
        //  filePath: tempFilePaths,
        //})
        wx.setStorageSync('passport_front', tempFilePaths)
        //wx.startPullDownRefresh()
        that.setData({
          upload1: true,
          front: wx.getStorageSync('passport_front'),
        })
      },
    })
  },
  clickback: function (e) {
    var that = this
    wx.chooseImage({
      count: 1,
      sizeType: ['original'],
      sourceType: ['album'],
      success: function (res) {
        var tempFilePaths = res.tempFilePaths
        //for testing,saving image
        //wx.saveImageToPhotosAlbum({
        //  filePath: tempFilePaths,
        //})
        wx.setStorageSync('passport_back', tempFilePaths)
        //wx.startPullDownRefresh()
        that.setData({
          upload2: true,
          back: wx.getStorageSync('passport_back'),
        })
      },
    })
  },
  showFrontMenu: function (e) {
    this.setData({
      menufront: false,
    })
  },
  showBackMenu: function (e) {
    this.setData({
      menuback: false,
    })
  },
  hideMenuTap: function (e) {
    this.setData({
      menufront: true,
      menuback: true,
    })
  },
  setGallery: function (e) {
    var that = this
    var source = !this.data.menufront ? "Front" : "Back"
    this.setData({
      menufront: true,
      menuback: true,
    })
    wx.chooseImage({
      count: 1,
      sizeType: ['original'],
      sourceType: ['album'],
      success: function (res) {
        var tempFilePaths = res.tempFilePaths
        if (source == "Front") {
          console.log(source)
          wx.setStorageSync('passport_front', tempFilePaths[0])
          console.log(wx.getStorageSync('passport_front'))
          that.setData({
            upload1: true,
            front: tempFilePaths,
          })
        } else {
          console.log(source)
          wx.setStorageSync('passport_back', tempFilePaths[0])
          console.log(wx.getStorageSync('passport_back'))
          //wx.startPullDownRefresh()
          that.setData({
            upload2: true,
            back: tempFilePaths,
          })
        }
      },
      //fail: function () {
      //  wx.showModal({
      //    title: 'Cancelled',
      //    content: 'operation cancelled',
      //  })
      //}
    })
  },

  setCamera: function (e) {
    var source = !this.data.menufront ? "Front" : "Back"
    var value = encodeURIComponent(source)
    this.setData({
      menufront: true,
      menuback: true,
    })
    wx.navigateTo({
      //url: '../canvas/main',
      url: '../cover/main?source=' + value,
    })
  },
})