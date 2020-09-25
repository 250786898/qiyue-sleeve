/**
 * @作者 7七月
 * @微信公号 林间有风
 * @开源项目 $ http://7yue.pro
 * @免费专栏 $ http://course.7yue.pro
 * @我的课程 $ http://imooc.com/t/4294850
 * @创建时间 2019-11-04 09:31
 */


class Joiner {
    _str = ''
    _symbol = '-'
    _cutCharNum = 1
    constructor(symbol, cutCharNum) {
        if (symbol) {
            this._symbol = symbol
        }
        if (cutCharNum){
            this._cutCharNum = cutCharNum
        }
    }
    join(part) {
        if (part) {
            this._str += `${part}${this._symbol}`;
        }
    }
    getStr() {
        return this._str.substring(0, this._str.length - this._cutCharNum)
    }

}

export {
    Joiner
}