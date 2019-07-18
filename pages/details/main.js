// pages/details/main.js
const MONTHS = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'June.', 'July.', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'];
var issuetempyear
var issuetempmonth
var issuetempday

var exptempyear
var exptempmonth
var exptempday

Page({

  /**
   * Page initial data
   */
  data: {
    passportType: ['国际护照', '其他'],
    TypeArray: [
      {
        id: 1, name: '国际护照',
      },
      {
        id: 2, name: '其他',
      },
    ],
    typeindex: -1,
    selectedType: "Please Select",
    issueindex: -1,
    issueDate: '请选择',
    expiryDate: '请选择',

    iCountry: '',
    dateupdate: false,
    expdateupdate: false,
    name: '',
    nameupdate: false,
    passportNumber: '',
    previousPassportNumber: '',

    hideIssueDate: true,
    issueyear: new Date().getFullYear(),      // 年份
    issuemonth: new Date().getMonth() + 1,    // 月份
    issueday: new Date().getDate(),
    //str: MONTHS[new Date().getMonth()],  // 月份字符串
    issue_days_style: [],
    hideExpDate: true,
    expyear: new Date().getFullYear(),      // 年份
    expmonth: new Date().getMonth() + 1,    // 月份
    expday: new Date().getDate(),
    //str: MONTHS[new Date().getMonth()],  // 月份字符串
    exp_days_style: [],
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    const days_count = new Date(this.data.issueyear, this.data.issuemonth, 0).getDate();

    let issue_days_style = new Array;
    let exp_days_style = new Array;

    for (let i = 1; i <= days_count; i++) {
      if (i == this.data.issueday) {
        issue_days_style.push({
          month: 'current', day: i, color: '#314580', background: '#ffed09'
        });
        exp_days_style.push({
          month: 'current', day: i, color: '#314580', background: '#ffed09'
        });
      } else {
        issue_days_style.push({
          month: 'current', day: i, color: 'white'
        });
        exp_days_style.push({
          month: 'current', day: i, color: 'white'
        });
      }
    }

    issuetempyear = this.data.issueyear
    issuetempmonth = this.data.issuemonth
    issuetempday = this.data.issueday
    exptempyear = this.data.expyear
    exptempmonth = this.data.expmonth
    exptempday = this.data.expday
    this.setData({
      issue_days_style,
      exp_days_style
    });
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
    this.setData({
      iCountry: wx.getStorageSync('IssueCountry')
    })
    if (wx.getStorageSync('IssueCountry')) {
      this.setData({
        issueindex: 1
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

  bindPassportTypeChange: function (e) {
    this.setData({
      typeindex: e.detail.value
    })
    wx.setStorageSync('PassportType', this.data.passportType[e.detail.value])
  },

  bindIssueCountryChange: function (e) {
    this.setData({
      issueindex: e.detail.value
    })
    wx.setStorageSync('IssueCountry', this.data.IssueCountry[e.detail.value])
  },

  bindIssueDateChange: function (e) {
    this.setData({
      dateupdate: true,
      issueDate: e.detail.value
    })
    wx.setStorageSync('IssueDate', e.detail.value)
  },

  bindExpiryDateChange: function (e) {
    this.setData({
      expdateupdate: true,
      expiryDate: e.detail.value
    })
    wx.setStorageSync('ExpiryDate', e.detail.value)
  },

  bindPassportNumber: function (e) {
    this.setData({
      passportNumber: e.detail.value
    })
    wx.setStorageSync('PassportNumber', e.detail.value)
  },

  bindPreviousPassportNumber: function (e) {
    this.setData({
      previousPassportNumber: e.detail.value
    })
    wx.setStorageSync('PreviousPassportNumber', e.detail.value)
  },

  setContinue: function (e) {
    wx.navigateTo({
      url: '../address/main',
    })
  },

  bindName: function (e) {
    this.setData({
      nameupdate: true,
      name: e.detail.value
    })
    wx.setStorageSync('PassportName', e.detail.value)
  },

  selectIssueCountry: function (e) {
    var value = encodeURIComponent("IssueCountry")
    wx.navigateTo({
      url: '../picker/main?source=' + value,
    })
  },

  showIssueModal: function (e) {
    this.setData({
      hideIssueDate: false,
    })
  },

  showExpModal: function (e) {
    this.setData({
      hideExpDate: false,
    })
  },

  issueDayClick: function (event) {
    const year = event.detail.year;
    const month = event.detail.month;
    const day = event.detail.day;

    const days_count = new Date(year, month, 0).getDate();
    let issue_days_style = new Array;
    for (let i = 1; i <= days_count; i++) {
      if (i == day) {
        issue_days_style.push({
          month: 'current', day: i, color: '#314580', background: '#ffed09'
        });
      } else {
        issue_days_style.push({
          month: 'current', day: i, color: 'white'
        });
      }
    }
    issuetempyear = year
    issuetempmonth = month
    issuetempday = day
    this.setData({
      issue_days_style
    });
  },

  issueDateChange: function (event) {
    const currentYear = event.detail.currentYear;
    const currentMonth = event.detail.currentMonth;

    const days_count = new Date(currentYear, currentMonth, 0).getDate();
    let issue_days_style = new Array;
    for (let i = 1; i <= days_count; i++) {
      if (i == this.data.issueday) {
        issue_days_style.push({
          month: 'current', day: i, color: '#314580', background: '#ffed09'
        });
      } else {
        issue_days_style.push({
          month: 'current', day: i, color: 'white'
        });
      }
    }
    this.setData({
      issue_days_style
    });

    issuetempyear = currentYear
    issuetempmonth = currentMonth
  },

  modalIssueCancel: function (e) {
    const days_count = new Date(this.data.issueyear, this.data.issuemonth, 0).getDate();
    let issue_days_style = new Array;
    for (let i = 1; i <= days_count; i++) {
      if (i == this.data.issueday) {
        issue_days_style.push({
          month: 'current', day: i, color: '#314580', background: '#ffed09'
        });
      } else {
        issue_days_style.push({
          month: 'current', day: i, color: 'white'
        });
      }
    }
    this.setData({
      hideIssueDate: true,
      issue_days_style
    });
  },

  modalIssueConfirm: function (e) {
    this.setData({
      issueyear: issuetempyear,
      issuemonth: issuetempmonth,
      issueday: issuetempday,
      issueDate: issuetempyear + "-" + issuetempmonth + "-" + issuetempday,
    })
    const days_count = new Date(issuetempyear, issuetempmonth, 0).getDate();
    let issue_days_style = new Array;
    for (let i = 1; i <= days_count; i++) {
      if (i == issuetempday) {
        issue_days_style.push({
          month: 'current', day: i, color: '#314580', background: '#ffed09'
        });
      } else {
        issue_days_style.push({
          month: 'current', day: i, color: 'white'
        });
      }
    }
    this.setData({
      hideIssueDate: true,
      dateupdate: true,
      issue_days_style
    });
    wx.setStorageSync('IssueDate', this.data.issueDate)
  },


  expDayClick: function (event) {
    const year = event.detail.year;
    const month = event.detail.month;
    const day = event.detail.day;

    const days_count = new Date(year, month, 0).getDate();
    let exp_days_style = new Array;
    for (let i = 1; i <= days_count; i++) {
      if (i == day) {
        exp_days_style.push({
          month: 'current', day: i, color: '#314580', background: '#ffed09'
        });
      } else {
        exp_days_style.push({
          month: 'current', day: i, color: 'white'
        });
      }
    }
    exptempyear = year
    exptempmonth = month
    exptempday = day
    this.setData({
      exp_days_style
    });
  },

  expDateChange: function (event) {
    const currentYear = event.detail.currentYear;
    const currentMonth = event.detail.currentMonth;

    const days_count = new Date(currentYear, currentMonth, 0).getDate();
    let exp_days_style = new Array;
    for (let i = 1; i <= days_count; i++) {
      if (i == this.data.expday) {
        exp_days_style.push({
          month: 'current', day: i, color: '#314580', background: '#ffed09'
        });
      } else {
        exp_days_style.push({
          month: 'current', day: i, color: 'white'
        });
      }
    }
    this.setData({
      exp_days_style
    });

    exptempyear = currentYear
    exptempmonth = currentMonth
  },

  modalExpCancel: function (e) {
    const days_count = new Date(exptempyear, exptempmonth, 0).getDate();
    let exp_days_style = new Array;
    for (let i = 1; i <= days_count; i++) {
      if (i == this.data.expday) {
        exp_days_style.push({
          month: 'current', day: i, color: '#314580', background: '#ffed09'
        });
      } else {
        exp_days_style.push({
          month: 'current', day: i, color: 'white'
        });
      }
    }
    this.setData({
      hideExpDate: true,
      exp_days_style
    });
  },

  modalExpConfirm: function (e) {
    this.setData({
      expyear: exptempyear,
      expmonth: exptempmonth,
      expday: exptempday,
      expiryDate: exptempyear + "-" + exptempmonth + "-" + exptempday,
    })
    const days_count = new Date(exptempyear, exptempmonth, 0).getDate();
    let exp_days_style = new Array;
    for (let i = 1; i <= days_count; i++) {
      if (i == exptempday) {
        exp_days_style.push({
          month: 'current', day: i, color: '#314580', background: '#ffed09'
        });
      } else {
        exp_days_style.push({
          month: 'current', day: i, color: 'white'
        });
      }
    }
    this.setData({
      expdateupdate: true,
      hideExpDate: true,
      exp_days_style
    });
    wx.setStorageSync('ExpiryDate', this.data.expiryDate)
  },
})