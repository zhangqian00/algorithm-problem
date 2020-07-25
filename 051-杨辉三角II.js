/*
给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。



在杨辉三角中，每个数是它左上方和右上方的数的和。

示例:

输入: 3
输出: [1,3,3,1]
*/
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if(rowIndex===0)return [1]
    if(rowIndex===1)return [1,1]
    let res = [[1],[1,1]]
    for(let i=2;i<=rowIndex;i++){
        let temp = []
        for(let j=0;j<=i;j++){
            temp.push((res[i-1][j-1]||0)+(res[i-1][j]||0))
        }
        res.push(temp)
    }
    return res[rowIndex]
};