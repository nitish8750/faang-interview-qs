/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  if (s.length === 1 || s.length === 2) return true;
  let str = s.replace(/\W+/g, "").toLowerCase();
  let left = 0,
    right = s.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      let p1 = isPalindrome(str, left + 1, right);
      let p2 = isPalindrome(str, left, right - 1);
      return p1 || p2;
    }
    left++;
    right--;
  }
  return true;
};

function isPalindrome(str, left, right) {
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
