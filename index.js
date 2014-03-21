
/**
 * Converts all sub-arrays into one level array
 * flatten([1,[2,3]]) -> [1,2,3]
 * flatten([[[1]],[2,[3]]], 1) -> [[1],2,[3]]
 *
 * @param {Array} arr An array with possible sub-arrays
 * @param {Array} level Positive number of level
 * @return {Array} Flat array
 */

flatten = function(arr, level) {
    level = typeof level === 'undefined' ? -1 : level;

    var result = [];
    if (Array.isArray(arr)) {
        arr.forEach(function(elm) {
            if (Array.isArray(elm) && level !== 0) {
                result = result.concat(flatten(elm, level > 0 ? level - 1 : level));
            } else {
                result.push(elm);
            }
        });
    } else {
        result.push(arr);
    }
    return result;
};

module.exports = flatten;
