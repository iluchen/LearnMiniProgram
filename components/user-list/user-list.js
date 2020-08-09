// components/user-list/user-list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data: {
      type: Array,
      value: []
    },
    allSelect: {
      type: Number,
      value: 0
    },
    curSelect: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    curSelect: 0,
    all: 10,
    selectIds: [],
    level: 1
  },

  /**
   * 组件的方法列表
   */
  methods: {
    selectAll(e) {
      let key =  e.detail.value.length > 0 ?  true :  false
      this.triggerEvent('selectAll', key)
    }
  }
})
