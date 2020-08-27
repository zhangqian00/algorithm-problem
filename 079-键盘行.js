/*
给定一个单词列表，只返回可以使用在键盘同一行的字母打印出来的单词。键盘如下图所示。
 

示例：

输入: ["Hello", "Alaska", "Dad", "Peace"]
输出: ["Alaska", "Dad"]
 

注意：

你可以重复使用键盘上同一字符。
你可以假设输入的字符串将只包含字母。
 */
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let key1 = 'qwertyuiop'
    let key2 = 'asdfghjkl'
    let key3 = 'zxcvbnm'
    let res = []
    for(let i=0;i<words.length;i++){
        let temp = words[i].toLowerCase().split('')
        if(temp.every((el)=>key1.includes(el))||
            temp.every((el)=>key2.includes(el))||
            temp.every((el)=>key3.includes(el))){
            res.push(words[i])
        }
    }
    return res
};
var findWords = function (words) {
    return words.filter(x => /(^[qwertyuiop]+$)|(^[asdfghjkl]+$)|(^[zxcvbnm]+$)/i.test(x))
};