const assert = require('node:assert/strict');
const { progressPercent } = require('./progress.cjs');

assert.equal(progressPercent(2, 4), 50, '完成一半时应为 50');
assert.equal(progressPercent(0, 0), 0, '空列表时应为 0');
assert.equal(progressPercent(4, 4), 100, '全部完成时应为 100');
assert.equal(progressPercent(1, 3), 33, '百分比应四舍五入到整数');

console.log('progress checks passed');
