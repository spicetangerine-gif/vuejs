const express = require("express");
// Web Server 설정
const app = express();
// 미들웨어 등록 영역
// 1. body parser
// content-type : application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
// content-type : application/json
app.use(express.json());

// Server 실행
app.listen(3000, () => {
  // 서버 실행 후 작업
  console.log("Server Start");
  console.log("http://localhost:3000");
});

// 라우팅 등록 영역
// 기본 라우팅
app.get("/", (req, res) => {
  res.send("Wellcome!");
});
// 메뉴별로 파일을 분리해서 관리
const bookRouter = require("./routers/book_router.js");

app.use("/", bookRouter);
