/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function (s) {
  let distinctMap = new Map(),
    L = 0,
    max = 0;
  if (s.length <= 1) return s.length;
  for (let R = 0; R < s.length; R++) {
    const currentChar = s[R];
    const previousSeenChar = distinctMap.get(currentChar);
    if (previousSeenChar >= L) L = previousSeenChar + 1;
    distinctMap.set(currentChar, R);
    max = Math.max(max, R - L + 1);
  }
  return max;
};
