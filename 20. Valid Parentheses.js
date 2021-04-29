/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stacks = [];
  if (s === "") return true;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stacks.push(s[i]);
    } else if (s[i] === ")") {
      if (stacks.pop() !== "(") {
        return false;
        break;
      }
    } else if (s[i] === "}") {
      if (stacks.pop() !== "{") {
        return false;
        break;
      }
    } else if (s[i] === "]") {
      if (stacks.pop() !== "[") {
        return false;
        break;
      }
    }
  }
  return stacks.length === 0 ? true : false;
};
