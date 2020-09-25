import {config} from "../config/config";
import {promisic} from "./util";

/**
 * @作者 7七月
 * @微信公号 林间有风
 * @开源项目 $ http://7yue.pro
 * @免费专栏 $ http://course.7yue.pro
 * @我的课程 $ http://imooc.com/t/4294850
 * @创建时间 2019-09-22 05:30
 */

class Http {
    static async request({
                       url,
                       data,
                       method = 'GET'
                   }) {
        const res = await promisic(wx.request)({
            url: `${config.apiBaseUrl}${url}`,
            data,
            method,
            header: {
                appkey: config.appkey
            }
        })
        return res.data
    }
    // 统一异常处理的方案
}

// wx.request
// promisic(wx.request)({
//     url:'',
//     data:data,
// })
//
// promisic(wx.getStorage)
//
// promisic(wx.showToast)()

//动态类型 非常常见， python
// java C# 委托

export {
    Http
}