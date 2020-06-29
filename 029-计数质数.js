/*
统计所有小于非负整数 n 的质数的数量。

示例:

输入: 10
输出: 4
解释: 小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
 */
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
	let num = 0;
    let arr = new Array(n)
    for(let i=2;i<n;i++){ // 排除掉倍数
        if(!arr[i-1]){
            num++;
            for(let j=i*i;j<n;j+=i){
                arr[j-1] = true;
            }
        }
    }
    return num;
};