/* eslint-disable no-console */
exports.info = function(message) {
  console.info(`\x1b[36m[makes] ${message}\x1b[0m`);
};

exports.warn = function(message) {
  console.warn(`\x1b[32m[makes] ${message}\x1b[0m`);
};

exports.error = function(message) {
  console.error(`\x1b[31m[makes] ${message}\x1b[0m`);
};
