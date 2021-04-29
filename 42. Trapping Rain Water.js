/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let total = 0;
  for (let i = 0; i < height.length; i++) {
    let maxL = 0,
      maxR = 0,
      left = i,
      right = i;
    while (left >= 0) {
      maxL = Math.max(maxL, height[left]);
      left--;
    }
    while (right < height.length) {
      maxR = Math.max(maxR, height[right]);
      right++;
    }
    const currWater = Math.min(maxL, maxR) - height[i];
    if (currWater >= 0) {
      total += currWater;
    }
  }
  return total;
};
