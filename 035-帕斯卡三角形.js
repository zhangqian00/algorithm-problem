/*
给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。



在杨辉三角中，每个数是它左上方和右上方的数的和。

示例:

输入: 5
输出:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
	if(numRows===0)return []
    if(numRows===1)return [[1]]
    let res = [[1],[1,1]]
    for(let i=2;i<numRows;i++){
        let temp = res[i-1]
        let temp2 = []
        for(let j=0;j<=temp.length;j++){
            temp2.push((temp[j]||0)+(temp[j-1]||0))
        }
        res.push(temp2)
    }
    return res
};