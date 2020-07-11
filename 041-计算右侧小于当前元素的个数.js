/*
给定一个整数数组 nums，按要求返回一个新数组 counts。数组 counts 有该性质： counts[i] 的值是  nums[i] 右侧小于 nums[i] 的元素的数量。

示例:

输入: [5,2,6,1]
输出: [2,1,1,0] 
解释:
5 的右侧有 2 个更小的元素 (2 和 1).
2 的右侧仅有 1 个更小的元素 (1).
6 的右侧有 1 个更小的元素 (1).
1 的右侧有 0 个更小的元素.
*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
    let len = nums.length
    return nums.map((el,i)=>{
        let num = 0
        for(let k=i+1;k<len;k++){
            if(nums[k]<el){
                ++num
            }
        }
        return num
    })
};