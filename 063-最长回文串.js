/*
给定一个包含大写字母和小写字母的字符串，找到通过这些字母构造成的最长的回文串。

在构造过程中，请注意区分大小写。比如 "Aa" 不能当做一个回文字符串。

注意:
假设字符串的长度不会超过 1010。

示例 1:

输入:
"abccccdd"

输出:
7

解释:
我们可以构造的最长的回文串是"dccaccd", 它的长度是 7。
 */
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let res = 0
    let set = new Set()
    let arr = s.split('')
    for(let i=0;i<arr.length;i++){
        if(set.has(arr[i])){
            res+=2
            set.delete(arr[i])
        }else {
            set.add(arr[i])
        }
    }
    return res+(set.size>0?1:0)
};
var longestPalindrome = function(s) {
	let res = 0
	let arr = s.split('')
	let map = new Map()
	for(let i=0;i<arr.length;i++){
		if(map.has(arr[i])){
			if((map.get(arr[i])+1)%2===0){
				res+=2
				map.set(arr[i],0)
			}else {
				map.set(arr[i],map.get(arr[i])+1)
			}
		}else {
			map.set(arr[i],1)
		}
	}
	for(let item of map){
		if(item[1] === 1){
			res+=1
			break
		}
	}
	return res
};