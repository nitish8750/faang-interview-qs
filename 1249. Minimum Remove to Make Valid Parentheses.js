/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  let stackIdx = [];
  let validStr = "",
    finalStr = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stackIdx.push(i);
    } else if (s[i] === ")") {
      if (stackIdx.length === 0) {
        s[i] = "";
      } else {
        stackIdx.pop();
      }
    }
  }
  while (stackIdx.length > 0) {
    const idx = stackIdx.pop();
    s = s.slice(0, idx) + s.slice(idx + 1);
  }
  return s;
};
