/*
两个整数之间的汉明距离指的是这两个数字对应二进制位不同的位置的数目。

给出两个整数 x 和 y，计算它们之间的汉明距离。

注意：
0 ≤ x, y < 231.

示例:

输入: x = 1, y = 4

输出: 2

解释:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

上面的箭头指出了对应二进制位不同的位置。
*/
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
	let str1 = x.toString(2)
    let str2 = y.toString(2)
    let len = Math.max(str1.length,str2.length);
    str1 = str1.padStart(len,'0')
    str2 = str2.padStart(len,'0')
    let num = 0;
    for(let i=0;i<len;i++){
        if(str1[i]!==str2[i]){
            num++
        }
    }
    return num;
};