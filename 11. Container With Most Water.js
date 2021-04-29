/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  // let area = 0;
  // let max = 0;
  // for (let i = 0; i < height.length; i++){
  //     for (let j = i + 1; j < height.length; j++){
  //         let area = Math.min(height[i], height[j]) * (j - i);
  //         if (area > max) {
  //             max = area;
  //         }
  //     }
  // }
  // return max;
  let max = 0;
  let i = 0,
    j = height.length - 1;
  while (i < j) {
    let hight = Math.min(height[i], height[j]);
    let width = j - i;
    let area = hight * width;
    max = Math.max(max, area);

    if (height[i] <= height[j]) {
      i++;
    } else {
      j--;
    }
  }
  return max;
};
