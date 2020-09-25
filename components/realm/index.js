import { FenceGroup } from '../models/fence-group'

// components/realm/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    spu: Object
  },

  observers: {
    'spu': function(spu) {
      if(!spu){
        return
      }
      this._setSkuList(spu)
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    skuList: [] //SKU规格列表
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * @param {Object} spu spu商品对象
     * @deprecated 设置Sku列表
     */
    _setSkuList (spu) {
      const fenceGroup = new FenceGroup()
      const skuList = fenceGroup.createFances()
      this.setData({
        skuList
      })
    }
  }
})
