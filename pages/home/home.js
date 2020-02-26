// pages/home/page.js
// const app = getApp()
// console.log(app.user.name)

Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: 'luchen',
    list: [{
        id: 1,
        name: 'luchen'
      },
      {
        id: 2,
        name: 'liuyilu'
      },
      {
        id: 3,
        name: 'xiaomi'
      },
      {
        id: 4,
        name: 'huawei'
      },
      {
        id: 5,
        name: 'ali'
      }
    ],
    counter: 0
  },
  /**
   * 添加
   */
  add() {
    this.setData({
      counter: ++this.data.counter
    })
  },
  /**
   * 删除
   */
  remove() {
    this.setData({
      counter: --this.data.counter
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 获取数据
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})