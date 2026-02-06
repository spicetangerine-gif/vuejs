// Service에서 필요에 따라 DB에 접속 => mapper
const mariadb = require("../databass/mapper.js");

// Service : 실제 제공하는 기능
// 도서 전체 목록
const findAll = async () => {
  // DB에서 데이터를 가져옴.
  let list = await mariadb
    .query("selectBookList")
    .catch((err) => console.log(err));
  return list;
};
// 도서 상세 정보
const findByBookNo = async (bookNo) => {
  let list = await mariadb
    .query("selectBookOne", bookNo)
    .catch((err) => console.log(err));
  // SELECT문은 반드시 결과가 배열
  let info = list[0];
  return info;
};

// 도서 등록
const addNewBook = async (bookInfo) => {
  let data = convertObjToAry(bookInfo);
  let resInfo = await mariadb
    .query("bookInsert", data)
    .catch((err) => console.log(err));
  //DML(insert, update, delete) :
  //  { affectedRows: 1, insertId: 1, warningStatus: 0 } 로 반환

  let result = null;
  if (resInfo.insertId > 0) {
    // 정상적으로 등록된 경우
    result = {
      isSuccessed: true,
      bookNo: resInfo.insertId,
    };
  } else {
    // 등록되지 않은 경우
    result = {
      isSuccessed: false,
    };
  }

  return result;
};

// 객체 => 배열

//`INSERT INTO t_book_01 (name, writer, publisher, publication_date, info)
//VALUES (?, ?, ?, ?, ?)`;

function convertObjToAry(target) {
  return [
    target.name,
    target.writer,
    target.publisher,
    target.publication_date,
    target.info,
  ];
}

// 도서 수정
// 도서 삭제

module.exports = {
  // exports에 등록하지 않으면 외부로 노출되지 않음
  // => router에서 사용 못 함
  findAll,
  findByBookNo,
  addNewBook,
};
