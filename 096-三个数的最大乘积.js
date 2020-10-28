/*
给定一个整型数组，在数组中找出由三个数组成的最大乘积，并输出这个乘积。

示例 1:

输入: [1,2,3]
输出: 6
示例 2:

输入: [1,2,3,4]
输出: 24
注意:

给定的整型数组长度范围是[3,104]，数组中所有的元素范围是[-1000, 1000]。
输入的数组中任意三个数的乘积不会超出32位有符号整数的范围。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    nums.sort((a,b)=>b-a) // 全正数，前3个数相乘，有负数，前3个数相乘或两个最小负数乘最大正数
    return Math.max(nums[0]*nums[1]*nums[2],nums[nums.length-1]*nums[nums.length-2]*nums[0])
};