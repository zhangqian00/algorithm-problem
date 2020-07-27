/*
给定一种规律 pattern 和一个字符串 str ，判断 str 是否遵循相同的规律。

这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 str 中的每个非空单词之间存在着双向连接的对应规律。

示例1:

输入: pattern = "abba", str = "dog cat cat dog"
输出: true
示例 2:

输入:pattern = "abba", str = "dog cat cat fish"
输出: false
示例 3:

输入: pattern = "aaaa", str = "dog cat cat dog"
输出: false
示例 4:

输入: pattern = "abba", str = "dog dog dog dog"
输出: false
说明:
你可以假设 pattern 只包含小写字母， str 包含了由单个空格分隔的小写字母。   
 */
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    let arr1 = pattern.split('')
    let map1 = new Map()
    let res1 = ''
    for(let i=0;i<arr1.length;i++){
        if(map1.has(arr1[i])){
            res1+=map1.get(arr1[i])
        }else {
            map1.set(arr1[i],i)
            res1+=i
        }
    }
    let arr2 = str.split(' ')
    let map2 = new Map()
    let res2 = ''
    for(let i=0;i<arr2.length;i++){
        if(map2.has(arr2[i])){
            res2+=map2.get(arr2[i])
        }else {
            map2.set(arr2[i],i)
            res2+=i
        }
    }
    return res1===res2
};