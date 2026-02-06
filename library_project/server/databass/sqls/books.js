// Table : t_book_01

// 백틱(``) 사용

// 조건없이 전체조회
const selectBookList = `
SELECT no
         , name
         , writer
         , publisher
         , publication_date
         , info
FROM t_book_01
ORDER by no
`;
// PRIMERY KEY를 활용한 단건조회
const selectBookOne = `
SELECT no
         , name
         , writer
         , publisher
         , publication_date
         , info
FROM t_book_01
WHERE no = ?`;
// ?읭 총 갯수는 1개이고 대체랄 값이 입력될 컬럼은 no로 명확함 : 단일 기본값(숫자)
// 북번호를 기준으로 단건조회

// 등록
const bookInsert = `
INSERT INTO t_book_01 (name, writer, publisher, publication_date, info)
VALUES (?, ?, ?, ?, ?)`;
// ?의 총 갯수는 2개이상이므로 배열이 필요하고 각 ?에 대체할 값이 입력될 컬럼은 명확
// : 기본값을 5개 가진 배열

// 수정
const bookUpdate = ``;
// 삭제
const bookDelete = ``;
module.exports = {
  selectBookList,
  selectBookOne,
  bookInsert,
  bookUpdate,
  bookDelete,
};
