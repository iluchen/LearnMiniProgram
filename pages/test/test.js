// pages/test/test.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageSize: 0,
    users: [{
      id: '1', name: '浙江省',
      child: [{
        id: '2', name: '一级领导', pid: '1,3,6', child:
          [{ id: '3', pid: '2,3', name: '二级领导', child: [] }, {
            id: '4', name: '一级领导2', child: []
          }]
      }, {
        id: '5', pid: '1,3', name: '江西省', child: []
      }]
    }, { id: '6', name: 'ss' }],
    level: 1, // 用来处理user层级问题，获取数据后添加层级然后在setdata
    selectArr: [],
    childSelectArr: [],
  },

  

  checkboxChange(e) {
    console.log('checkboxChange', e)
    this.setData({
      selectArr: e.detail.value
    })
  },

  itemSelect(e) {
    console.log('itemSelect', e)
    wx.navigateTo({
      url: '/pages/user/user?id=' + e.currentTarget.dataset.id,
    })
  },

  selectAll(e) {
    console.log('selectAll', e.detail)
  },

  findSelectById(id) {

  },

  

  changePage(e) {
    this.setData({
      pageSize: e.detail
    })
    console.log('changePage', this.data.pageSize)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // this.setData({
    //   users: val
    // })

    app.globalData.user = this.data.users

    

  },

  onShow: function() {
    console.log('app.globalData.select', app.globalData.select)
    this.setData({
      childSelectArr: app.globalData.select
    })
  }

})