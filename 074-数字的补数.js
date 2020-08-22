/*
给定一个正整数，输出它的补数。补数是对该数的二进制表示取反。

 

示例 1:

输入: 5
输出: 2
解释: 5 的二进制表示为 101（没有前导零位），其补数为 010。所以你需要输出 2 。
示例 2:

输入: 1
输出: 0
解释: 1 的二进制表示为 1（没有前导零位），其补数为 0。所以你需要输出 0 。
*/
/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let arr = num.toString(2).split('')
    let arr2 = arr.map((el)=>el==1?0:1)
    return parseInt(arr2.join(''),2)
};