// 教学样例：故意保留空列表时的 Bug，请按课程修复。
function progressPercent(completed, total) {
  return Math.round((completed / total) * 100);
}

module.exports = { progressPercent };
