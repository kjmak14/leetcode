/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let result = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(result) !== 0) {
            result = result.substring(0, result.length - 1);
            if (result === '') {
                return '';
            }
        }
    }
    return result;
};