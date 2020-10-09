/*
给定一个字符串 s 和一个整数 k，你需要对从字符串开头算起的每隔 2k 个字符的前 k 个字符进行反转。

如果剩余字符少于 k 个，则将剩余字符全部反转。
如果剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符，其余字符保持原样。
 

示例:

输入: s = "abcdefg", k = 2
输出: "bacdfeg"
 

提示：

该字符串只包含小写英文字母。
给定字符串的长度和 k 在 [1, 10000] 范围内。
 */
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let arr = []
    let len = Math.ceil(s.length/(2*k))
    for(let i=0;i<len;i++){
        let arr1 = s.slice(i*2*k,i*2*k+2*k).split('')
        let temp = arr1.splice(0,k).reverse()
        arr1 = temp.concat(arr1)
        arr.push(arr1.join(''))
    }
    return arr.join('')
};