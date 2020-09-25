import {Http} from '../utils/http'
class Spu {
  static getSpuDetail({pid}) {
    return Http.request({
      url: `/spu/id/${pid}/detail`
    })
  }
}

export {
  Spu
}