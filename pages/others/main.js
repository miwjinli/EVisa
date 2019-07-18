// pages/others/main.js
var filetypelist = ['pdf', 'doc', 'docx', 'zip', 'rar', '7z', 'ppt', 'pptx', 'xls', 'xlsx'];
var filetypepath = ['../../images/pdflogo.jpg', '../../images/doclogo.jpg', '../../images/doclogo.jpg', '../../images/ziplogo.png', '../../images/ziplogo.png', '../../images/ziplogo.png', '../../images/pptlogo.png', '../../images/pptlogo.png', '../../images/xlslogo.png', '../../images/xlslogo.png'];

var imagetypelist = ['png', 'jpg', 'jpeg', 'bmp', 'ico']
var unknownlogo = '../../images/unknownlogo.png'
var multilogo = '../../images/multilogo.png'

Page({

  /**
   * Page initial data
   */
  data: {
    flight: "没有选择任何文件",
    hotel: "没有选择任何文件",
    other: "没有选择任何文件",
    upload: false,
    flightimage: '',
    hotelimage: '',
    otherimage: '',
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

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
    var flight = wx.getStorageSync('flight_name')
    if (flight) {
      this.setData({
        upload: true,
        flight: flight,
      })
    }
    var hotel = wx.getStorageSync('hotel_name')
    if (hotel) {
      this.setData({
        hotel: hotel,
      })
    }

    var other_length = wx.getStorageSync('other_length')
    if (other_length) {
      if (other_length > 1) {
        this.setData({
          other: other_length + " files selected",
        })
      } else {
        var other = wx.getStorageSync('other_name' + 0)
        this.setData({
          other: other,
        })
      }
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

  setUploadFlight: function (e) {
    var that = this
    wx.chooseMessageFile({
      count: 1,
      type: 'all',
      //extension:['doc','docx','pdf','png','jpg'],
      success(res) {
        var tempFiles = res.tempFiles[0]
        wx.setStorageSync('whole', res)
        wx.setStorageSync('flight', tempFiles.path)
        wx.setStorageSync('flight_name', tempFiles.name)
        //wx.startPullDownRefresh()
        var filetype = tempFiles.name.split('.').pop()
        var imagepath = that.data.flightimage
        console.log(filetype)
        var validtype = false
        for (var i = 0; i < filetypelist.length; i++) {
          if (filetypelist[i] == filetype) {
            imagepath = filetypepath[i]
            validtype = true
          }
        }
        if (!validtype) {
          for (var i = 0; i < imagetypelist.length; i++) {
            if (imagetypelist[i] == filetype) {
              imagepath = tempFiles.path
              validtype = true
            }
          }
        }
        if (!validtype) {
          imagepath = unknownlogo
        }
        console.log(imagepath)
        that.setData({
          upload: true,
          flightimage: imagepath,
          flight: tempFiles.name,
        })
      }
    })
  },

  setUploadHotel: function (e) {
    var that = this
    wx.chooseMessageFile({
      count: 1,
      type: 'all',
      //extension:['doc','docx','pdf','png','jpg'],
      success(res) {
        var tempFiles = res.tempFiles[0]
        wx.setStorageSync('hotel', tempFiles.path)
        wx.setStorageSync('hotel_name', tempFiles.name)
        //wx.startPullDownRefresh()
        var filetype = tempFiles.name.split('.').pop()
        var imagepath = that.data.hotelimage
        console.log(filetype)
        var validtype = false
        for (var i = 0; i < filetypelist.length; i++) {
          if (filetypelist[i] == filetype) {
            imagepath = filetypepath[i]
            validtype = true
          }
        }
        if (!validtype) {
          for (var i = 0; i < imagetypelist.length; i++) {
            if (imagetypelist[i] == filetype) {
              imagepath = tempFiles.path
              validtype = true
            }
          }
        }
        if (!validtype) {
          imagepath = unknownlogo
        }

        that.setData({
          hotel: tempFiles.name,
          hotelimage: imagepath,
        })
      }
    })
  },

  setUploadOthers: function (e) {
    var that = this
    wx.chooseMessageFile({
      count: 10,
      type: 'all',
      //extension:['doc','docx','pdf','png','jpg'],
      success(res) {
        var filesize = res.tempFiles.length
        for (var i = 0; i < filesize; i++) {
          var tempFiles = res.tempFiles[i]
          wx.setStorageSync('other' + i, tempFiles.path)
          wx.setStorageSync('other_name' + i, tempFiles.name)
        }
        wx.setStorageSync('other_length', filesize)
        //wx.startPullDownRefresh()
        if (filesize > 1) {
          var imagepath = multilogo
          that.setData({
            other: filesize + " files selected",
            otherimage: imagepath,
          })

        } else {
          var other = wx.getStorageSync('other_name' + 0)

          var filetype = tempFiles.name.split('.').pop()
          var imagepath = that.data.otherimage
          console.log(filetype)
          var validtype = false
          for (var i = 0; i < filetypelist.length; i++) {
            if (filetypelist[i] == filetype) {
              imagepath = filetypepath[i]
              validtype = true
            }
          }
          if (!validtype) {
            for (var i = 0; i < imagetypelist.length; i++) {
              if (imagetypelist[i] == filetype) {
                imagepath = tempFiles.path
                validtype = true
              }
            }
          }
          if (!validtype) {
            imagepath = unknownlogo
          }

          that.setData({
            other: other,
            otherimage: imagepath,
          })
        }

      }
    })
  },

  setContinue: function (e) {
    wx.navigateTo({
      url: '../details/main',
    })
  },
})