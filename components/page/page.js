// components/page/page.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    curPage: {
      type: Number,
      value:1
    },
    limit: {
      type: Number,
      value: 10
    },
    total: {
      type: Number,
      value:0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    allPage: 10
  },

  /**
   * 组件的方法列表
   */
  methods: {
    prev(e){
      if(this.data.curPage > 1) {
        this.data.curPage--
        this.setData({
          curPage: this.data.curPage
        })
        this.triggerEvent('changePage', this.data.curPage)
      }
    },
    next(e){
      if(this.data.curPage < this.data.allPage) {
        this.data.curPage++
        this.setData({
          curPage: this.data.curPage
        })
        this.triggerEvent('changePage', this.data.curPage)
      }
    }
  }
})
