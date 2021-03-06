/*
假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

注意：给定 n 是一个正整数。

示例 1：

输入： 2
输出： 2
解释： 有两种方法可以爬到楼顶。
1.  1 阶 + 1 阶
2.  2 阶
示例 2：

输入： 3
输出： 3
解释： 有三种方法可以爬到楼顶。
1.  1 阶 + 1 阶 + 1 阶
2.  1 阶 + 2 阶
3.  2 阶 + 1 阶
 */
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) { // 斐波那契
	if(n===1) return 1;
	let num1 = 1,num2 = 1,sum = 0;
	for(let i=2;i<=n;i++){
		sum = num1 + num2;
		num1 = num2;
		num2 = sum;
	}
	return sum;
};
var climbStairs = function(n) { // 斐波那契,数值过大的话占内存，卡死
	if(n===1||n===2) return 1;
	return climbStairs(n-1)+climbStairs(n-2);
};