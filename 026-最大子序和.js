/*
给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

示例:

输入: [-2,1,-3,4,-1,2,1,-5,4],
输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
	let arr = [];
    for(let i=0;i<nums.length;i++){
        let a = 0;
        let arr2 = [];
        for(let j=i;j<nums.length;j++){
            a += nums[j];
            arr2.push(a);
        }
        arr.push(Math.max.call(null,...arr2));
    }
    return Math.max.apply(null,arr);
};