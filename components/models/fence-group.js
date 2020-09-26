import { Matrix } from "../../models/matrix"

class FenceGroup {
  spuList //当前商品spu
  constructor (spu) {
    this.spuList = spu.sku_list
  }

  /**
   * @description 创建规格栅栏
   */
  createFances() {
    const m =this._initSpuList()
    console.log('_initSpuList',m)
    const matrix = new Matrix(m)
    const fances = matrix.transpose()
    return fances
  }

  _initSpuList () {
    return this.spuList.map(item => {
      return item.specs
    });
  }
}

export {
  FenceGroup
}