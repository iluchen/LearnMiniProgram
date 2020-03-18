// pages/wxs/wxs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    counter: 0,
    list: ['首页', '购物车', '我的', '更多'],
    content: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      content: this.data.list[0]
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  add(event) {
    // 额外传的数据在event detail中获取
    this.setData({
      counter: ++this.data.counter
    })
  },
  handleItem(event) {
    this.setData({
      content: event.detail.item
    })
  }
})