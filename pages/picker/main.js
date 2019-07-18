// pages/picker/main.js
class City {
  searchLetter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'Y', 'Z']

  country = [{ letter: 'A', name: '阿富汗', english: 'Afghanistan' }, { letter: 'A', name: '安圭拉', english: 'Anguilla' }, { letter: 'A', name: '亚美尼亚', english: 'Armenia' }, { letter: 'A', name: '阿根廷', english: 'Argentina' }, { letter: 'A', name: '阿鲁巴', english: 'Aruba' }, { letter: 'A', name: '澳大利亚', english: 'Australia' }, { letter: 'A', name: '奥地利', english: 'Austria' }, { letter: 'A', name: '阿塞拜疆', english: 'Azerbaijan' }, { letter: 'B', name: '巴哈马', english: 'Bahamas' }, { letter: 'B', name: '巴林', english: 'Bahrain' }, { letter: 'B', name: '孟加拉', english: 'Bangladesh' }, { letter: 'B', name: '巴巴多斯', english: 'Barbados' }, { letter: 'B', name: '白俄罗斯', english: 'Belarus' }, { letter: 'B', name: '比利时', english: 'Belgium' }, { letter: 'B', name: '伯利兹', english: 'Belize' }, { letter: 'B', name: '贝宁', english: 'Benin' }, { letter: 'B', name: '百慕大', english: 'Bermuda' }, { letter: 'B', name: '不丹', english: 'Bhutan' }, { letter: 'B', name: '玻利维亚', english: 'Bolivia' }, { letter: 'B', name: '布维岛', english: 'Bouvet Islands' }, { letter: 'B', name: '巴西', english: 'Brazil' }, { letter: 'B', name: '英属印度洋领地', english: 'British Indian Ocean Territory' }, { letter: 'B', name: '英属维尔京群岛', english: 'British Virgin Islands' }, { letter: 'B', name: '文莱', english: 'Brunei' }, { letter: 'B', name: '保加利亚', english: 'Bulgaria' }, { letter: 'B', name: '布基纳法索', english: 'Burkina Faso' }, { letter: 'B', name: '布隆迪', english: 'Burundi' }, { letter: 'C', name: '柬埔寨', english: 'Cambodia' }, { letter: 'C', name: '喀麦隆', english: 'Cameroon' }, { letter: 'C', name: '加拿大', english: 'Canada' }, { letter: 'C', name: '佛得角', english: 'Cape Verde' }, { letter: 'C', name: '开曼群岛', english: 'Cayman Islands' }, { letter: 'C', name: '中非共和国', english: 'Central African Republic' }, { letter: 'C', name: '乍得', english: 'Chad' }, { letter: 'C', name: '智利', english: 'Chile' }, { letter: 'C', name: '中国', english: 'China' }, { letter: 'C', name: '哥伦比亚', english: 'Colombia' }, { letter: 'C', name: '科摩罗', english: 'Comoros' }, { letter: 'C', name: '刚果', english: 'Congo' }, { letter: 'C', name: '哥斯达黎加', english: 'Costa Rica' }, { letter: 'C', name: '科特迪瓦哈加格', english: "Cote D'Ivorie" }, { letter: 'C', name: '克罗地亚', english: 'Croatia' }, { letter: 'C', name: '塞浦路斯', english: 'Cyprus' }, { letter: 'C', name: '捷克', english: 'Czech Republic' }, { letter: 'D', name: '丹麦', english: 'Denmark' }, { letter: 'D', name: '吉布提', english: 'Djibouti' }, { letter: 'D', name: '多米尼克', english: 'Dominica' }, { letter: 'D', name: '多米尼加', english: 'Dominican Republic' }, { letter: 'E', name: '埃及', english: 'Egypt' }, { letter: 'E', name: '萨尔瓦多', english: 'El Salvador' }, { letter: 'E', name: '厄瓜多尔', english: 'Equador' }, { letter: 'E', name: '赤道几内亚', english: 'Equatorial Guinea' }, { letter: 'E', name: '厄立特里亚', english: 'Eritrea' }, { letter: 'E', name: '爱沙尼亚', english: 'Estonia' }, { letter: 'E', name: '埃塞俄比亚', english: 'Ethiopia' }, { letter: 'F', name: '福克兰群岛', english: 'Falkland Islands' }, { letter: 'F', name: '法罗群岛', english: 'Faroe Islands' }, { letter: 'F', name: '密克罗尼西亚联邦', english: 'Federated States of Micronesia' }, { letter: 'F', name: '斐济', english: 'Fiji' }, { letter: 'F', name: '芬兰', english: 'Finland' }, { letter: 'F', name: '法国', english: 'France' }, { letter: 'F', name: '法属圭亚那', english: 'French Guiana' }, { letter: 'F', name: '法属波利尼西亚', english: 'French Polynesia' }, { letter: 'G', name: '加蓬', english: 'Gabon' }, { letter: 'G', name: '冈比亚', english: 'Gambia' }, { letter: 'G', name: '格鲁吉亚', english: 'Georgia' }, { letter: 'G', name: '德国', english: 'Germany' }, { letter: 'G', name: '加纳', english: 'Ghana' }, { letter: 'G', name: '直布罗陀', english: 'Gibraltar' }, { letter: 'G', name: '希腊', english: 'Greece' }, { letter: 'G', name: '格陵兰', english: 'Greenland' }, { letter: 'G', name: '格林纳达', english: 'Grenada' }, { letter: 'G', name: '瓜德罗普岛', english: 'Guadeloupe' }, { letter: 'G', name: '关岛', english: 'Guam' }, { letter: 'G', name: '危地马拉', english: 'Guatemala' }, { letter: 'G', name: '几内亚', english: 'Guinea' }, { letter: 'G', name: '几内亚比绍', english: 'Guinea-Bissau' }, { letter: 'G', name: '圭亚那', english: 'Guyana' }, { letter: 'H', name: '海地', english: 'Haiti' }, { letter: 'H', name: '洪都拉斯', english: 'Honduras' }, { letter: 'H', name: '香港', english: 'Hong Kong' }, { letter: 'H', name: '匈牙利', english: 'Hungary' }, { letter: 'I', name: '冰岛', english: 'Iceland' }, { letter: 'I', name: '印度', english: 'India' }, { letter: 'I', name: '印尼', english: 'Indonesia' }, { letter: 'I', name: '爱尔兰', english: 'Republic of Ireland' }, { letter: 'I', name: '以色列', english: 'Israel' }, { letter: 'I', name: '伊朗', english: 'Iran' }, { letter: 'I', name: '伊拉克', english: 'Iraq' }, { letter: 'I', name: '意大利', english: 'Italy' }, { letter: 'J', name: '牙买加', english: 'Jamaica' }, { letter: 'J', name: '日本', english: 'Japan' }, { letter: 'J', name: '乔丹', english: 'Jordan' }, { letter: 'K', name: '哈萨克斯坦', english: 'Kazakhstan' }, { letter: 'K', name: '肯尼亚', english: 'Kenya' }, { letter: 'K', name: '基里巴斯', english: 'Kiribati' }, { letter: 'K', name: '科威特', english: 'Kuwait' }, { letter: 'K', name: '吉尔吉斯斯坦', english: 'Kyrgyzstan' }, { letter: 'L', name: '老挝', english: 'Laos' }, { letter: 'L', name: '拉脱维亚', english: 'Latvia' }, { letter: 'L', name: '黎巴嫩', english: 'Lebanon' }, { letter: 'L', name: '莱索托', english: 'Lesotho' }, { letter: 'L', name: '利比里亚', english: 'Liberia' }, { letter: 'L', name: '利比亚', english: 'Libya' }, { letter: 'L', name: '列支敦士登', english: 'Liechtenstein' }, { letter: 'L', name: '立陶宛', english: 'Lithuania' }, { letter: 'L', name: '卢森堡', english: 'Luxembourg' }, { letter: 'M', name: '澳门', english: 'Macau' }, { letter: 'M', name: '马达加斯加', english: 'Madagascar' }, { letter: 'M', name: '马拉维', english: 'Malawi' }, { letter: 'M', name: '马来西亚', english: 'Malaysia' }, { letter: 'M', name: '马尔代夫', english: 'Maldives' }, { letter: 'M', name: '马里', english: 'Mali' }, { letter: 'M', name: '马耳他', english: 'Malta' }, { letter: 'M', name: '马绍尔群岛', english: 'Marshall Islands' }, { letter: 'M', name: '毛里求斯', english: 'Mauritius' }, { letter: 'M', name: '马提尼克岛', english: 'Martinique' }, { letter: 'M', name: '毛里塔尼亚', english: 'Mauritania' }, { letter: 'M', name: '马约', english: 'Mayotte' }, { letter: 'M', name: '法属美特罗波利坦', english: 'Metropolitan France' }, { letter: 'M', name: '墨西哥', english: 'Mexico' }, { letter: 'M', name: '摩尔多瓦', english: 'Moldova' }, { letter: 'M', name: '蒙古', english: 'Mongolia' }, { letter: 'M', name: '摩洛哥', english: 'Morocco' }, { letter: 'M', name: '摩纳哥', english: 'Monaco' }, { letter: 'M', name: '黑山', english: 'Montenegro' }, { letter: 'M', name: '莫桑比克', english: 'Mozambique' }, { letter: 'M', name: '缅甸', english: 'Myanmar' }, { letter: 'N', name: '纳米比亚', english: 'Namibia' }, { letter: 'N', name: '瑙鲁', english: 'Nauru' }, { letter: 'N', name: '尼泊尔', english: 'Nepal' }, { letter: 'N', name: '荷属安地列斯群岛', english: 'Neterlands Antilles' }, { letter: 'N', name: '荷兰', english: 'Netherlands' }, { letter: 'N', name: '新喀里多', english: 'New Caledonia' }, { letter: 'N', name: '新西兰', english: 'New Zealand' }, { letter: 'N', name: '尼加拉瓜', english: 'Nicaragua' }, { letter: 'N', name: '尼日尔', english: 'Niger' }, { letter: 'N', name: '尼日利亚', english: 'Nigeria' }, { letter: 'N', name: '北马里亚纳群岛', english: 'Northern Mariana Islands' }, { letter: 'N', name: '挪威', english: 'Norway' }, { letter: 'N', name: '朝鲜', english: 'North Korea' }, { letter: 'O', name: '阿曼', english: 'Oman' }, { letter: 'P', name: '巴基斯坦', english: 'Pakistan' }, { letter: 'P', name: '贝劳', english: 'Palau' }, { letter: 'P', name: '巴拿马', english: 'Panama' }, { letter: 'P', name: '巴布亚新几内亚', english: 'Papua New Guinea' }, { letter: 'P', name: '巴拉圭', english: 'Paraguay' }, { letter: 'P', name: '巴勒斯坦国', english: 'Palestine State' }, { letter: 'P', name: '秘鲁', english: 'Peru' }, { letter: 'P', name: '菲律宾', english: 'Philippines' }, { letter: 'P', name: '皮特凯恩群岛', english: 'Pitcairn' }, { letter: 'P', name: '波兰', english: 'Poland' }, { letter: 'P', name: '葡萄牙', english: 'Portugal' }, { letter: 'P', name: '波多黎各', english: 'Puerto Rico' }, { letter: 'Q', name: '卡塔尔', english: 'Qatar' }, { letter: 'R', name: '韩国', english: 'Republic of Korea' }, { letter: 'R', name: '马其顿', english: 'Republic of Macedonia' }, { letter: 'R', name: '留尼旺', english: 'Reunion' }, { letter: 'R', name: '罗马尼亚', english: 'Romania' }, { letter: 'R', name: '俄罗斯', english: 'Russia' }, { letter: 'R', name: '卢旺达', english: 'Rwanda' }, { letter: 'S', name: '圣多美和普林西比', english: 'Sao Tome and Principe' }, { letter: 'S', name: '沙特阿拉伯', english: 'Saudi Arabia' }, { letter: 'S', name: '萨摩亚', english: 'Samoa' }, { letter: 'S', name: '圣马力诺', english: 'San Marino' }, { letter: 'S', name: '塞内加尔', english: 'Senegal' }, { letter: 'S', name: '塞舌尔', english: 'Seychelles' }, { letter: 'S', name: '塞尔维亚', english: 'Serbia' }, { letter: 'S', name: ' 新加坡', english: 'Singapore' }, { letter: 'S', name: '塞拉利昂', english: 'Sierra Leone' }, { letter: 'S', name: ' 斯洛伐克', english: 'Slovakia' }, { letter: 'S', name: ' 斯洛文尼亚', english: 'Slovenia' }, { letter: 'S', name: ' 所罗门群岛', english: 'Solomon Islands' }, { letter: 'S', name: '索马里', english: 'Somalia' }, { letter: 'S', name: '南非', english: 'South Africa' }, { letter: 'S', name: '南苏丹', english: 'South Sudan' }, { letter: 'S', name: '西班牙', english: 'Spain' }, { letter: 'S', name: '斯里兰卡', english: 'Sri Lanka' }, { letter: 'S', name: '圣赫勒拿', english: 'St. Helena' }, { letter: 'S', name: '圣基茨和尼维斯', english: 'St. Kitts and Nevis' }, { letter: 'S', name: '圣露西亚', english: 'St. Lucia' }, { letter: 'S', name: '圣文森特和格林纳丁斯', english: 'St. Vincent and the Grenadines' }, { letter: 'S', name: '苏丹', english: 'Sudan' }, { letter: 'S', name: '苏里南', english: 'Suriname' }, { letter: 'S', name: '斯瓦尔巴和扬马延岛', english: 'Svalbard and Jan Mayen Islands' }, { letter: 'S', name: '斯威士兰', english: 'Swaziland' }, { letter: 'S', name: '瑞典', english: 'Sweden' }, { letter: 'S', name: '瑞士', english: 'Switzerland' }, { letter: 'S', name: '叙利亚', english: 'Syria' }, { letter: 'T', name: '台湾', english: 'Taiwan' }, { letter: 'T', name: '塔吉克斯坦', english: 'Tajikistan' }, { letter: 'T', name: '坦桑尼亚', english: 'Tanzania' }, { letter: 'T', name: '泰国', english: 'Thailand' }, { letter: 'T', name: '多哥', english: 'Togo' }, { letter: 'T', name: '汤加', english: 'Tonga' }, { letter: 'T', name: '特立尼达和多巴哥', english: 'Trinidad and Tobago' }, { letter: 'T', name: '突尼斯', english: 'Tunisia' }, { letter: 'T', name: '土耳其', english: 'Turkey' }, { letter: 'T', name: '土库曼斯坦', english: 'Turkmenistan' }, { letter: 'T', name: '特克斯和凯科斯群岛', english: 'Turks and Caicos Islands' }, { letter: 'T', name: '图瓦卢', english: 'Tuvalu' }, { letter: 'U', name: '乌干达', english: 'Uganda' }, { letter: 'U', name: '乌克兰', english: 'Ukraine' }, { letter: 'U', name: '阿拉伯联合酋长国', english: 'United Arab Emirates' }, { letter: 'U', name: '英国', english: 'United Kingdom' }, { letter: 'U', name: '美国', english: 'United States of America' }, { letter: 'U', name: '乌拉圭', english: 'Uruguay' }, { letter: 'U', name: '乌兹别克斯坦', english: 'Uzbekistan' }, { letter: 'V', name: '瓦努阿图', english: 'Vanuatu' }, { letter: 'V', name: '梵蒂冈', english: 'Vatican City' }, { letter: 'V', name: '委内瑞拉', english: 'Venezuela' }, { letter: 'V', name: '越南', english: 'Vietnam' }, {letter: 'W', name: '威尔士', english: 'Wales' } ,{ letter: 'W', name: '西撒哈拉', english: 'Western Sahara' }, { letter: 'Y', name: '也门', english: 'Yemen' }, { letter: 'Z', name: '扎伊尔', english: 'Zaire' }, { letter: 'Z', name: '赞比亚', english: 'Zambia' }, { letter: 'Z', name: '津巴布韦', english: 'Zimbabwe' }]


  countryList() {
    var result = []
    var id = 0
    for (var i = 0; i < this.searchLetter.length; i++) {
      var info = {}
      info.initial = this.searchLetter[i]
      var j = 0;
      var alphabetList = []
      for (var j = 0; j < this.country.length; j++) {
        if (this.searchLetter[i] == this.country[j].letter) {
          var countryInfo = {}
          countryInfo.id = id
          countryInfo.country = this.country[j].name +" / " + this.country[j].english
          id++
          alphabetList.push(countryInfo)
        }
      }
      info.countryInfo = alphabetList
      result.push(info)
    }
    return result
  }
}

var country = new City()

Page({

  /**
   * Page initial data
   */
  data: {
    searchLetter: [],
    showLetter: "",
    winHeight: 0,
    tHeight: 0,
    bHeight: 0,
    startPageY: 0,
    countryList: [],
    isShowLetter: false,
    scrollTop: 0,
    country: "",
    from: '',
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    var searchLetter = country.searchLetter//['A','B','C']//country.searchLetter;
    console.log(country)

    var countryList = country.countryList();
    console.log(countryList)

    var sysInfo = wx.getSystemInfoSync();
    //console.log(sysInfo);
    var winHeight = sysInfo.windowHeight;
    console.log(winHeight)

    //添加要匹配的字母范围值
    //1、更加屏幕高度设置子元素的高度
    var itemH = winHeight / searchLetter.length;
    console.log(itemH)
    var tempObj = [];
    for (var i = 0; i < searchLetter.length; i++) {
      var temp = {};
      temp.name = searchLetter[i];
      temp.tHeight = i * itemH;
      temp.bHeight = (i + 1) * itemH;

      tempObj.push(temp)
    }

    this.setData({
      winHeight: winHeight,
      itemH: itemH,
      searchLetter: tempObj,
      countryList: countryList,
      from: decodeURIComponent(options.source),
      country: wx.getStorageSync(decodeURIComponent(options.source))
    })

    console.log(this.data.countryInfo);

    console.log(this.data.countryList)
    console.log(this.data.from)
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
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  },

  searchStart: function (e) {
    console.log(e)
    var showLetter = e.currentTarget.dataset.letter;
    var pageY = e.touches[0].pageY;
    this.setScrollTop(this, showLetter);
    this.nowLetter(pageY, this);
    this.setData({
      showLetter: showLetter,
      startPageY: pageY,
      isShowLetter: true,
    })
  },

  searchMove: function (e) {
    var pageY = e.touches[0].pageY;
    var startPageY = this.data.startPageY;
    var tHeight = this.data.tHeight;
    var bHeight = this.data.bHeight;
    var showLetter = 0;
    console.log(pageY);
    if (startPageY - pageY > 0) { //向上移动
      if (pageY < tHeight) {
        // showLetter=this.mateLetter(pageY,this);
        this.nowLetter(pageY, this);
      }
    } else {//向下移动
      if (pageY > bHeight) {
        // showLetter=this.mateLetter(pageY,this);
        this.nowLetter(pageY, this);
      }
    }
  },

  searchEnd: function (e) {
    // console.log(e);
    // var showLetter=e.currentTarget.dataset.letter;
    var that = this;
    setTimeout(function () {
      that.setData({
        isShowLetter: false
      })
    }, 1000)

  },

  nowLetter: function (pageY, that) {//当前选中的信息
    var letterData = this.data.searchLetter;
    var bHeight = 0;
    var tHeight = 0;
    var showLetter = "";
    for (var i = 0; i < letterData.length; i++) {
      if (letterData[i].tHeight <= pageY && pageY <= letterData[i].bHeight) {
        bHeight = letterData[i].bHeight;
        tHeight = letterData[i].tHeight;
        showLetter = letterData[i].name;
        break;
      }
    }

    this.setScrollTop(that, showLetter);

    that.setData({
      bHeight: bHeight,
      tHeight: tHeight,
      showLetter: showLetter,
      startPageY: pageY
    })
  },

  bindScroll: function (e) {
    console.log(e.detail)
  },

  setScrollTop: function (that, showLetter) {
    var scrollTop = 0;
    var countryList = that.data.countryList;
    var cityCount = 0;
    var initialCount = 0;
    for (var i = 0; i < countryList.length; i++) {
      if (showLetter == countryList[i].initial) {
        scrollTop = initialCount * 30 + cityCount * 41;
        break;
      } else {
        initialCount++;
        cityCount += countryList[i].countryInfo.length;
      }
    }

    that.setData({
      scrollTop: scrollTop
    })
  },

  bindCity: function (e) {
    console.log(e)
    var country = e.currentTarget.dataset.country;
    var splits = country.split(" / ")
    console.log(splits[0], splits[1])
    this.setData({ country: country })
    wx.setStorageSync(this.data.from, e.currentTarget.dataset.country)
    wx.navigateBack({
      delta: 1
    })
  },
})