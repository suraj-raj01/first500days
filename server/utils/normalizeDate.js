module.exports = function normalizeDate(dateStr) {
  const [m, d, y] = dateStr.split('/');
  return `20${y}-${m.padStart(2, '0')}-${d.padStart(2, '0')}`;
};
