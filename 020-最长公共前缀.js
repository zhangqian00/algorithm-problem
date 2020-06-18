/*
编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

示例 1:

输入: ["flower","flow","flight"]
输出: "fl"
示例 2:

输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀。
说明:

所有输入只包含小写字母 a-z 。
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
	if(!strs.length) return '';
    if(strs.length===1) return strs[0];
    let temp = strs.splice(0,1)[0];
    let str = '';
    for(let k=0;k<temp.length;k++){
        str += temp[k];
        for(let i=0;i<strs.length;i++){
            if(str !== strs[i].substring(0,k+1)){
                return str.substring(0,k);
            }
        }
    }
    return str;
};