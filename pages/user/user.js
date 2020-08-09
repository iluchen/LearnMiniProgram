// pages/user/user.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: -1,
    user: [],
    curList: [],
  },

  idList: [], // 用来追加上一层
  select: [], // 已选择的id
  tempCurList: [],

  prev(){
    if(this.idList.length > 1) {
      this.tempCurList = []
      console.log('idList', this.idList)
      this.idList.splice(-1)
      const id = this.idList[this.idList.length-1]
      this.setData({
        id
      })
      this.getCurListById(this.data.user)
      this.setData({
        curList: this.tempCurList
      })
    }else {
      wx.navigateBack({
        delta: 1
      })
    }
    console.log('select', this.select)
  },

  check(e) {
    console.log('check', e)
    const id = e.currentTarget.dataset.id
    if (this.select.includes(id)) {
      this.select = this.select.filter(item => item !== id)
    }else {
      this.select.push(id)
    }
    console.log('select', this.select)
    // 此处再将select 推到上一页面
    app.globalData.select = this.select
  },

  more(e){
    console.log('more', e)
    this.tempCurList = []
    this.setData({
      id: e.currentTarget.dataset.id
    })
    this.idList.push(this.data.id)
    this.getCurListById(this.data.user)
    this.setData({
      curList: this.tempCurList
    })
  },


  getCurListById(obj) {
    for (let i = 0; i < obj.length; i++) {
      if(this.select.includes(obj[i].id)) {
        obj[i].checked = true
      }else {
        obj[i].checked = false
      }
      if (obj[i].pid && obj[i].pid.includes(this.data.id)) {
        this.tempCurList.push(obj[i])
      }
      if (obj[i].child && obj[i].child.length > 0) {
        this.getCurListById(obj[i].child)
      }
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('options', options)
    this.setData({
      id: options.id,
      user: app.globalData.user
    })
    this.idList.push(options.id)


    this.getCurListById(this.data.user)
    console.log('tempCurList', this.tempCurList)
    if (this.tempCurList.length > 0) {
      this.setData({
        curList: this.tempCurList
      })
    }
  },


})