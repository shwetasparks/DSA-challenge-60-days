/**
 * 
 Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.
 
 */

var moveZeroes = function (nums) {
  let j = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      j = i;
      break;
    }
  }
  if (j === -1) {
    return;
  }
  for (i = j + 1; i < nums.length; i++) {
    if (nums[i] != 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      j++;
    }
  }
};
