/*
给定两个字符串 s 和 t，它们只包含小写字母。

字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。

请找出在 t 中被添加的字母。

 

示例:

输入：
s = "abcd"
t = "abcde"

输出：
e

解释：
'e' 是那个被添加的字母。
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let arr1 = s.split('')
    let arr2 = t.split('')
    for(let i=0;i<arr1.length;i++){
        if(arr2.indexOf(arr1[i])!==-1){
            arr2.splice(arr2.indexOf(arr1[i]),1)
            arr1.splice(i,1)
            i--
        }
    }
    return arr2.join('')
};