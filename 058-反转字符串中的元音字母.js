/*
编写一个函数，以字符串作为输入，反转该字符串中的元音字母。

示例 1:

输入: "hello"
输出: "holle"
示例 2:

输入: "leetcode"
输出: "leotcede"
说明:
元音字母不包含字母"y"。
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let yy = ['a','e','i','o','u']
    let arr = s.split('')
    let arr2 = []
    for(let i=0;i<arr.length;i++){
        if(yy.indexOf(arr[i].toLowerCase())!==-1){
            arr2.unshift(arr[i])
            arr[i] = ''
        }
    }
    for(let j=0;j<arr2.length;j++){
        if(arr.indexOf('')!==-1){
            arr[arr.indexOf('')] = arr2[j]
        }
    }
    return arr.join('')
};