// pages/cover/main.js
var myCanvasWidth
var myCanvasHeight

var cropX = (23 - 2) / 400
var cropY = (178 - 2) / 600
var width = (370 - 23 + 2) / 400
var height = (394 - 178 + 2) / 600
var data = false

Page({

  /**
   * Page initial data
   */
  data: {
    ctx: {},
    path: '',
    imageWidth: 0,
    imageHeight: 0,
    canvasWidth: 0,
    canvasHeight: 0,
    picture: false,
    picturepath: '../../images/frame.png',
    front: false,
    frontpath: '../../images/passportframe.png',
    back: false,
    backpath: '../../images/passportframe.png',
    from: '',
    flip: '../../images/flip-white.png',//'../../images/flip.png',
    position: true,
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    wx.getSystemInfo({
      success: function (res) {
        myCanvasWidth = res.windowWidth
        myCanvasHeight = res.windowHeight
      },
    })
    var from = decodeURIComponent(options.source)
    this.setData({
      canvasWidth: myCanvasWidth,
      canvasHeight: myCanvasHeight,
      from: from
    })
    console.log(from)
    from == "Profile" ? this.setData({ picture: true, position: true, }) : from == "Front" ? this.setData({ front: true, position: false, }) : this.setData({ back: true, position: false, })
    console.log(myCanvasWidth)
    console.log(myCanvasHeight)
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {
    var that = this
    var camera_ctx = wx.createCameraContext()
    that.setData({
      ctx: camera_ctx,
    })
    var that = this
    if (!this.data.picture) {
      const listener = camera_ctx.onCameraFrame((frame) => {
        if (!data) {
          that.setData({
            imageWidth: frame.width,
            imageHeight: frame.height,
          })
          console.log(that.data.imageWidth)
          console.log(that.data.imageHeight)
          data = true
        }
        listener.stop()
      })
      listener.start()
    }
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
  takePhoto() {
    console.log('take photo')
    var ctx = this.data.ctx
    if (this.data.picture) {
      ctx.takePhoto({
        quality: 'high',
        success: (res) => {
          if (this.data.picture) {
            wx.setStorageSync("passport_image", res.tempImagePath)
            //wx.previewImage({
            //  urls: [res.tempImagePath] // 需要预览的图片http链接列表
            //})
            console.log('take photo success')
            console.log(res)
            wx.navigateBack({
              delta: 1,
            })
          }
        },
        fail(res) {
          wx.showModal({
            title: 'Error Message',
            content: res.errMsg,
          })
        }
      })
    } else {
      wx.showLoading({
        title: 'Please Wait',
      })
      var that = this
      ctx.takePhoto({
        quality: 'high',
        success: (res) => {
          var context = wx.createCanvasContext('mycanvas')
          var x = cropX * myCanvasWidth
          var y = cropY * myCanvasHeight
          var width1 = width * myCanvasWidth
          var height1 = height * myCanvasHeight
          context.rect(x, y, width1, height1)
          context.clip()
          context.drawImage(res.tempImagePath, 0, 0, myCanvasWidth, myCanvasHeight)
          context.draw(true, function () {
            console.log('success')
            wx.canvasToTempFilePath({
              canvasId: 'mycanvas',
              x: x,
              y: y,
              width: width1,
              height: height1,
              success: function (res2) {
                console.log(res2)
                //for testing,saving image
                //wx.saveImageToPhotosAlbum({
                //  filePath: res2.tempFilePath,
                //})
                if (that.data.front) {
                  wx.setStorageSync("passport_front", res2.tempFilePath)
                }
                if (that.data.back) {
                  wx.setStorageSync("passport_back", res2.tempFilePath)
                }
                wx.hideLoading()
                wx.navigateBack({
                  delta: 1,
                })
              }, fail(res2) {
                wx.hideLoading()
                wx.showModal({
                  title: 'Error Message',
                  content: res2.errMsg,
                })
              }
            })
          })

        },
        fail(res) {
          wx.hideLoading()
          wx.showModal({
            title: 'Error Message',
            content: res.errMsg,
          })
        }
      })
    }
  },
  flip() {
    console.log('flip')
    var position = this.data.position
    this.setData({
      position: !position
    })
  }
})