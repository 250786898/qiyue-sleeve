/**
 * @作者 7七月
 * @创建时间 2019-09-26 05:47
 */
import {Http} from "../utils/http";

class Category {

    static async getHomeLocationC() {
        return await Http.request({
            url:`category/grid/all`
        })
    }
}

export {
    Category
}