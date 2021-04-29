/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  var i = 0,
    obj = {};
  while (i < nums.length) {
    var left = target - nums[i];
    if (obj[left] !== 0 && !obj[left]) {
      obj[nums[i]] = i;
    } else {
      return [obj[left], i];
    }
    i++;
  }
};
