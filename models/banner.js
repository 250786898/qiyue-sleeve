/**
 * @作者 7七月
 * @创建时间 2019-09-23 04:14
 */
import {Http} from "../utils/http";

class Banner {
    static locationB = 'b-1'
    static locationG = 'b-2'
    static async getHomeLocationB() {
        return await Http.request({
            url: `banner/name/${Banner.locationB}`
        })
    }

    static async getHomeLocationG() {
        return await Http.request({
            url:`banner/name/${Banner.locationG}`
        })
    }
}

export {
    Banner
}