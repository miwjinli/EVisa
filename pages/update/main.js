// pages/update/main.js
//获取应用实例
const app = getApp()
var uploadaddress = "http://10.18.168.195:8082/api/uploadfile"
var dbaddress = "http://10.18.168.195:8082/api/uploaddb"

Page({

  /**
   * Page initial data
   */
  data: {
    photo: false,
    front: false,
    back: false,
    flight: false,
    hotel: false,
    others: [false, false, false, false, false, false, false, false, false, false],
    database: false,
    submit: false,
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
    if (!this.data.submit) {
      this.setData({
        submit: true
      })
      wx.showLoading({
        title: '处理中...',
        mask: true,
      })
      //get datetime
      var c = new Date();
      var date = c.getFullYear() + "-" + (c.getMonth()+1) + "-" + c.getDate() + "@";
      var t = c.toLocaleTimeString('en-US', { hour12: true });
      var times = t.split(':')
      var format = times[times.length - 1].split(' ')[1];
      var datetime = date + times[0] + "." + times[1] + format
      console.log(format)
      console.log(times)
      console.log('date:' + c)
      console.log('date:' + c.getFullYear() + "-" + c.getMonth() + "-" + c.getDay())
      console.log('date:' + datetime)
      //get user
      var nickname = wx.getStorageSync('nickname')
      var passportName = wx.getStorageSync('PassportName')
      //upload photo
      var photourl = wx.getStorageSync('passport_image')
      upload(this, photourl, nickname, "passport-photo", datetime, passportName, "photo")

      var fronturl = wx.getStorageSync('passport_front')
      upload(this, fronturl, nickname, "passport-front", datetime, passportName, "front")

      var backurl = wx.getStorageSync('passport_back')
      upload(this, backurl, nickname, "passport-back", datetime, passportName, "back")

      var flighturl = wx.getStorageSync('flight')
      upload(this, flighturl, nickname, "flight-ticket", datetime, passportName, "flight")

      var hotelurl = wx.getStorageSync('hotel')
      if (hotelurl) {
        upload(this, hotelurl, nickname, "hotel", datetime, passportName, "hotel")
      }

      var other_length = wx.getStorageSync('other_length')
      if (other_length) {
        for (var i = 0; i < other_length; i++) {
          var otherurl = wx.getStorageSync('other' + i)
          upload(this, otherurl, nickname, "others_" + (i + 1), datetime, passportName, "others[" + i + "]")
        }
      }

      var passportType = wx.getStorageSync('PassportType')
      var issueCountry = wx.getStorageSync('IssueCountry')
      var issueDate = wx.getStorageSync('IssueDate')
      var expiryDate = wx.getStorageSync('ExpiryDate')
      var passportNumber = wx.getStorageSync('PassportNumber')
      var previousPassportNumber = wx.getStorageSync('PreviousPassportNumber')
      var mAdds1 = wx.getStorageSync('MAdds1')
      var mAdds2 = wx.getStorageSync('MAdds2')
      if (!mAdds2) {
        mAdds2 = "NULL"
      }
      var mPostcode = wx.getStorageSync('MPostcode')
      var mCity = wx.getStorageSync('MCity')
      var cAdds1 = wx.getStorageSync('CAdds1')
      var cAdds2 = wx.getStorageSync('CAdds2')
      if (!cAdds2) {
        cAdds2 = "NULL"
      }
      var cPostcode = wx.getStorageSync('CPostcode')
      var cCity = wx.getStorageSync('CCity')
      var cState = wx.getStorageSync('CState')
      var cCountry = wx.getStorageSync('CCountry')

      var array = [passportType, issueCountry, issueDate, expiryDate,
        passportNumber, previousPassportNumber, mAdds1, mAdds2,
        mPostcode, mCity, cAdds1, cAdds2, cPostcode, cCity, cState,
        cCountry, passportName]
      uploadDB(this, datetime, array, nickname)

      setTimeout(refresh, 5000);
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
    if (this.data.photo && this.data.front &&
      this.data.back && this.data.flight &&
      this.data.database) {
      var hotelurl = wx.getStorageSync('hotel')
      var other_length = wx.getStorageSync('other_length')
      if (hotelurl || other_length) {
        console.log("hotel or other")
        var temp1 = false;
        var temp2 = false;
        if (hotelurl) {
          if (this.data.hotel) {
            temp1 = true;
          }
        } else {
          temp1 = true;
        }
        if (other_length) {
          var temp3 = true;
          for (var i = 0; i < other_length; i++) {
            if (!this.data.others[i]) {
              temp3 = false;
            }
          }
          if (temp3) {
            temp2 = true;
          }
        } else {
          temp2 = true;
        }
        console.log("hotel " + this.data.hotel)
        for (var x = 0; x < 10; x++) {
          console.log("other" + x + " " + this.data.others[x])
        }
        if (temp1 && temp2) {
          wx.hideLoading()
          wx.showModal({
            title: 'Complete',
            content: '上传成功',
          })
          wx.clearStorageSync()
          wx.reLaunch({
            url: '../firstpage/main',
          })
        }
      } else {
        wx.hideLoading()
        wx.showModal({
          title: 'Complete',
          content: '上传成功',
        })
        wx.clearStorageSync()
        var photourl = wx.getStorageSync('passport_image')
        var fronturl = wx.getStorageSync('passport_front')
        var backurl = wx.getStorageSync('passport_back')
        wx.removeSavedFile({
          filePath: photourl,
        })
        wx.removeSavedFile({
          filePath: fronturl,
        })
        wx.removeSavedFile({
          filePath: backurl,
        })
        wx.reLaunch({
          url: '../firstpage/main',
        })
      }
    }
    console.log("photo " + this.data.photo)
    console.log("back " + this.data.back)
    console.log("front " + this.data.front)
    console.log("ticket " + this.data.flight)
    console.log("database " + this.data.database)
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

  }
})

function upload(page, path, nickname, type, datetime,passportName, update) {
  //console.log("uploading")
  //console.log(path)
  if (!page.data.type) {
    wx.uploadFile({
      url: uploadaddress,
      filePath: path,
      name: 'file',
      header: { "Content-Type": "multipart/form-data" },
      formData: {
        'user': nickname,
        'type': type,
        'datetime': datetime,
        'passportName': passportName,
      },
      success: function (res) {
        console.log(res)
        if (res.statusCode != 200) {
          wx.hideLoading()
          wx.showModal({
            title: 'Upload Failed',
            content: type + " 上传失败",
            showCancel: false,
          })
          return;
        }
        var data = res.data
        page.setData({
          [update]: true,
        })
        wx.startPullDownRefresh()
        wx.stopPullDownRefresh()
      },
      fail: function (res) {
        console.log(res)
        wx.hideLoading()
        wx.showModal({
          title: 'Upload Failed',
          content: type + " 上传失败",
          showCancel: false,
        })
      }

    })
  }
}


function uploadDB(page, datetime, array, nickname) {
  console.log(array)
  wx.request({
    url: dbaddress,
    data: {
      nickname: nickname,
      PassportType: array[0],
      IssueCountry: array[1],
      IssueDate: array[2],
      ExpiryDate: array[3],
      PassportNumber: array[4],
      PreviousPassportNumber: array[5],
      MAdds1: array[6],
      MAdds2: array[7], //
      MPostcode: array[8],
      MCity: array[9],
      CAdds1: array[10],
      CAdds2: array[11],
      CPostcode: array[12],
      CCity: array[13],
      CState: array[14],
      CCountry: array[15],
      PassportName: array[16],
      DateTime: datetime,
    },
    method: 'POST',
    header: {
      //'content-type': 'application/x-www-form-urlencoded'
      'content-type': 'application/json'
    },
    success(res) {
      if (res.statusCode != 200) {
        wx.hideLoading()
        wx.showModal({
          title: 'Upload Failed',
          content: "资料上传失败",
          showCancel: false,
        })
        return;
      }
      console.log("db done")
      console.log(res)
      page.setData({
        database: true
      })
      console.log(res.data)
      wx.startPullDownRefresh()
    },
    fail: function (res) {
      console.log(res)
      wx.hideLoading()
      wx.showModal({
        title: 'Upload Failed',
        content: "资料上传失败，找不到服务器",
        showCancel: false,
      })
    }
  })
}

function refresh(){
  wx.startPullDownRefresh()
  wx.stopPullDownRefresh()
}