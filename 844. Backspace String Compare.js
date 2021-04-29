/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
  let finalS = [],
    finalT = [];
  for (var i = 0; i < S.length; i++) {
    if (S[i] === "#") {
      finalS.pop();
    } else {
      finalS.push(S[i]);
    }
  }
  for (var j = 0; j < T.length; j++) {
    if (T[j] === "#") {
      finalT.pop();
    } else {
      finalT.push(T[j]);
    }
  }
  return finalS.join("") === finalT.join("");
};
