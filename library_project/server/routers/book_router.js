//Express의 Router 모듈
const express = require("express");
const router = express.Router();

// 해당 라우터를 통해 제공할 서비스를 가져옴
const bookService = require("../services/book_service.js");

// 도서 전체 조회 : URI, METHOD
router.get(`/books`, async (req, res) => {
  // 제공할 서비스 실행
  let result = await bookService.findAll().catch((err) => console.log(err));
  // 결과 반환
  res.send(result);
});

// 도서 상세 조회
router.get(`/books/:no`, async (req, res) => {
  // URL에 :(콜론)으로 표기된 모든 변수는
  // req(Http Request에 대응되는 변수)의 params 속성에 등록됨
  let bookNo = req.params.no;
  let result = await bookService
    .findByBookNo(bookNo)
    .catch((err) => console.log(err));
  res.send(result);
});

// 도서 등록 : POST
router.post(`/books`, async (req, res) => {
  // METHOD 중 POST와 PUT은 Http Request의 Body 영역을 가지며
  // req(Http Request에 대응되는 변수)의 body 속성에 등록됨
  let bookInfo = req.body;
  let result = await bookService
    .addNewBook(bookInfo)
    .catch((err) => console.log(err));
  res.send(result);
});

// 도서 수정

// 도서 삭제

// => 다른 파일에서 require()을 통해 가져옴
module.exports = router;
