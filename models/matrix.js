class Matrix {
  m
  constructor (m) {
    this.m = m
  }

  /**
   * 转置
   */
  transpose () {
    console.log('m',this.m)
    //定义一个新的数组
    var transposeArr=[];
    for(var i=0;i<this.m[0].length;i++){
        transposeArr[i]=[];
    }
    for(var i=0;i<this.m.length;i++){
        for(var j=0;j<this.m[i].length;j++){
            transposeArr[j][i]=this.m[i][j];
        }
    }
    return transposeArr
  }
}

export {
  Matrix
}