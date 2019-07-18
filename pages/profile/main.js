// pages/visa/main.js
var animation

Page({

  /**
   * Page initial data
   */
  data: {
    passport_image: "../../images/passport-size-photo.jpg",
    gallery: "../../images/gallery.jpg",
    camera: "../../images/camera.jpg",
    upload: false,
    menu: true,
    animationData: {},
    imgwidth: 100,
    imgheight: 100,
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    /*wx.login({
      success(res) {
        if (res.code) {
          wx.getUserInfo({
            withCredentials: false,
            success:function (res){
              var userInfo = res.userInfo
              var nickname = userInfo.nickname
              console.log(nickname)
            }
          })
          wx.setStorageSync('user', res.code)
        } else {
          console.log('登录失败！' + res.errMsg)
          wx.reLaunch({
            url: '../index/main',
          })
        }
      },
      fail(res) {
        wx.reLaunch({
          url: '../index/main',
        })
      }
    })*/
    var animation = wx.createAnimation({
      duration: 500,
      transformOrigin: "50% 50%",
      timingFunction: 'ease',
    })
    this.animation = animation
    this.setData({
      ctx: wx.createCameraContext()
    })

    var that = this
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          imgwidth: res.windowWidth * 0.75,
          imgheight: res.windowHeight * 0.50,
        })
      },
    })
  },

  startAnimation: function (isShow, offset) {
    var that = this
    var offsetTem
    if (offset == 0) {
      offsetTem = offset
    } else {
      offsetTem = offset + 'rpx'
    }
    //translateY可以加入单位（如20+'rpx'或者20+'vh'，不写单位时默认px），当0时不能加单位,否则动画无效果
    this.animation.translateY(offset).step()
    this.setData({
      animationData: this.animation.export(),
      menu: isShow
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
    //wx.startPullDownRefresh()
    var temp = wx.getStorageSync('passport_image')
    if (temp) {
      this.setData({
        upload: true,
        passport_image: wx.getStorageSync('passport_image')
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
    
  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh()
    var temp = wx.getStorageSync('passport_image')
    if (temp) {
      this.setData({
        upload: true,
        passport_image: wx.getStorageSync('passport_image')
      })
    }
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

  setGallery: function (e) {
    this.setData({
      menu: true,
    })
    var that = this
    wx.chooseImage({
      count: 1,
      sizeType: ['original'],
      sourceType: ['album'],
      success: function (res) {
        var tempFilePaths = res.tempFilePaths
        //passport_size = tempFilePaths
        //wx.setStorageSync('upload', true)
        wx.saveImageToPhotosAlbum({
          filePath: tempFilePaths,
        })
        wx.setStorageSync('passport_image', tempFilePaths[0])
        //var t2 = wx.getStorageSync('passport_image');
        //tmp = tempFilePaths
        //console.log(tempFilePaths)
        //wx.startPullDownRefresh()
        that.setData({
          upload: true,
          passport_image: wx.getStorageSync('passport_image')
        })
      },
      //fail:function(){
      //  wx.showModal({
      //    title: 'Cancelled',
      //    content: 'operation cancelled',
      //  })
      //}
    })
  },

  setCamera: function (e) {
    this.setData({
      menu: true,
    })
    var value = encodeURIComponent("Profile")
    wx.navigateTo({
      //url: '../canvas/main',
      url: '../cover/main?source=' + value,
    })
  },

  setContinue: function (e) {
    wx.navigateTo({
      url: '../passport/main',
    })
  },

  showMenu: function (e) {
    this.setData({
      menu: false,
    })
  },
  hideMenuTap: function (e) {
    this.setData({
      menu: true,
    })
  }
})