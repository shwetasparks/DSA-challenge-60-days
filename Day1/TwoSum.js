/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
 */
var twoSum = function (nums, target) {
  let hashmap = {};
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    //check if complement in hashmap
    if (complement in hashmap) {
      return [hashmap[complement], i];
    } else {
      hashmap[nums[i]] = i;
    }
  }
  return [];
};
console.log(twoSum([2, 7, 11, 15], 9));


