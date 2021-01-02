/**
 * Main algorithm
 */
// const d = [];
// const items = ['A', 'B', 'C', 'D'];
//
// for (let x = 0; x <= items.length - 1; x++) {
//   for (let y = 0; y <= items.length - 1; y++) {
//     for (let z = 0; z <= items.length - 1; z++) {
//       for (let t = 0; t <= items.length - 1; t++) {
//         d.push([x, y, z, t]);
//       }
//     }
//   }
// }

/**
 * Simple version
 * @param {*} item
 * @param {*} n
 * @param {*} filter
 */
// const ddd = [];
//
// function pow(x, n, m = []) {
//   if (n > 0) {
//     for (var i = 0; i < 4; i++) {
//       const a = pow(x, n - 1, [...m, i]);
//       ddd.push(a);
//     }
//   }
//   return m;
// }
//
// pow(4, 4);
// console.log(ddd.sort());

/**
 *
 * Generates all combination of given Array or number
 *
 * @param {Array | number} item  - Item accepts array or number. If it is array exports all combination of items. If it is a number export all combination of the number
 * @param {number} n - pow of the item, if given value is `n` it will be export max `n` item combination
 * @param {boolean} filter - if it is true it will just export items which have got n items length. Otherwise export all posible length.
 * @return {Array} Array of combination arrays.
 *
 * Usage Example:
 *
 * console.log(combination(['A', 'B', 'C', 'D'], 2, true)); // [[ 'A','A' ], [ 'A', 'B' ]...] (16 items)
 * console.log(comination(4, 2)); // all posible values [[ 0 ], [ 1 ], [ 2 ], [ 3 ], [ 0, 0 ], [ 0, 1 ], [ 0, 2 ]...] (20 items)
 */
function combination(item, n, filter = false) {
  n = n ? n : 1;
  const result = [];
  const isArray = item.constructor.name === 'Array';

  const pow = (x, n, m = []) => {
    if (n > 0) {
      for (var i = 0; i < 4; i++) {
        const value = pow(x, n - 1, [...m, isArray ? item[i] : i]);
        result.push(value);
      }
    }
    return m;
  }
  pow(isArray ? item.length : item, n);

  return filter ? result.filter(item => item.length == n) : result;
}

console.log('#####first sample: ', combination(['A', 'B', 'C', 'D'], 2, true)); // with filter
console.log('#####second sample: ', combination(4, 2)); // without filter
