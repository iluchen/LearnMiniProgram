// components/c-tab-control/c-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      data: {
        type: Array,
        value: []
      }
  },

  /**
   * 组件的初始数据
   */
  data: {
    curIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeTab(event) {
      const index = event.currentTarget.dataset.index;

      this.setData({
        curIndex: index
      })

      this.triggerEvent('clickItem', {index, item: this.properties.data[index]})
    }
    
  }
})
