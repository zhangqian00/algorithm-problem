/*
给定一个范围在  1 ≤ a[i] ≤ n ( n = 数组大小 ) 的 整型数组，数组中的元素一些出现了两次，另一些只出现一次。

找到所有在 [1, n] 范围之间没有出现在数组中的数字。

您能在不使用额外空间且时间复杂度为O(n)的情况下完成这个任务吗? 你可以假定返回的数组不算在额外空间内。

示例:

输入:
[4,3,2,7,8,2,3,1]

输出:
[5,6]
*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let arr = []
    for(let i=1;i<=nums.length;i++){
        arr.push(i)
    }
    for(let j=0;j<nums.length;j++){
        if(arr.indexOf(nums[j])!==-1){
            arr.splice(arr.indexOf(nums[j]),1)
        }
    }
    return arr
};
var findDisappearedNumbers = function(nums) {
    let arr = []
    for(let i=1;i<=nums.length;i++){
        if(!nums.includes(i)){
            arr.push(i)
        }
    }
    return arr
};