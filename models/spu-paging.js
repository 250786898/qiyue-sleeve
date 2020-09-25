/**
 * @作者 7七月
 * @创建时间 2019-10-12 18:07
 */
import {Paging} from "../utils/paging";

class SpuPaging{
    static getLatestPaging() {
        return new Paging({
            url:`spu/latest`
        },5)
    }
}

export {
    SpuPaging
}