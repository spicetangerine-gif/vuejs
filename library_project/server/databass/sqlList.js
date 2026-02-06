// table <=> file
const books = require("./sqls/books.js");

module.exports = {
  // 펼침연산자(spread operator, ...)을 활용
  ...books,
};
