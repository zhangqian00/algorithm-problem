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
	let res = [[1],[1,1]];
    if(numRows===0) return [];
    if(numRows===1) return [[1]];
    for(let i=2;i<numRows;i++){
        let temp = []
        let arr1 = res[i-1]
        for(let j=0;j<i;j++){
            temp[j]=arr1[j]+(arr1[j-1]?arr1[j-1]:0)
        }
        temp[i]=arr1[arr1.length-1]
        res.push(temp)
    }
    return res;
};