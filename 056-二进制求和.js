/*
给你两个二进制字符串，返回它们的和（用二进制表示）。

输入为 非空 字符串且只包含数字 1 和 0。

 

示例 1:

输入: a = "11", b = "1"
输出: "100"
示例 2:

输入: a = "1010", b = "1011"
输出: "10101"
 

提示：

每个字符串仅由字符 '0' 或 '1' 组成。
1 <= a.length, b.length <= 10^4
字符串如果不是 "0" ，就都不含前导零。
*/
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
	let len = Math.max(a.length,b.length) // 最大长度
	a = a.padStart(len,0) // 补0
	b = b.padStart(len,0) // 补0
	let arr1 = a.split('').map((el)=>Number(el)) // 转成数组
	let arr2 = b.split('').map((el)=>Number(el)) // 转成数组
	let jin = 0 // 进位
	let res = []
	for(let i=len-1;i>=0;i--){
		if(arr1[i]+arr2[i]+jin>2){ // 相加为3 进1 当前位为1
			res.unshift(1)
			jin=1
		}else if(arr1[i]+arr2[i]+jin>1){ // 相加为2 进1 当前位为0
			res.unshift(0)
			jin=1
		}else {  // 相加为1或0 不进位  当前位为三个值和
			res.unshift(arr1[i]+arr2[i]+jin)
			jin=0
		}
	}
	if(jin>0)res.unshift(1)  // 循环完  进位为1  首位补一位1
	return res.join('')
}