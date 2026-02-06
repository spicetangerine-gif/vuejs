// MariaDB에 접속할 모듈
const mariadb = require("mariadb");
// DB에서 실행할 SQL문을 별도 파일로 작성
const sqlList = require("./sqlList.js");
// ConnectionPool 생성
const connectionPool = mariadb.createPool({
  // DB에 접속하는 정보
  host: "localhost",
  port: 3306,
  user: "dev01",
  password: "dev01",
  database: "dev",
  connectionLimit: 10,
  // Object의 필드정보(Entiry)를 Query문에 있는 '?'에 자동변환 설정
  permitSetMultiParamEntries: true,
  // DML(insert, update, delete)를 실행할 경우 // 반환되는 Object의 insertId 속성을 Number 타입으로 자동 변환
  insertIdAsNumber: true,
  // MariaDB의 데이터 타입 중 bigInt 타입을 Javascript의 Number 타입으로 자동 변환
  // 해당 타입을 Javascript에선 자동으로 변환하지 못함
  bigIntAsNumber: true,
  // logger 등록
  logger: {
    // 실제 실행되는 SQL문이 console.log로 출력되도록 설정
    query: console.log,
    // error 발생 시 처리함수
    error: console.log,
  },
});

// DB에 SQL문을 보내고 결과를 받아와야 함. => 함수로 설정
const query = async (alias, values) => {
  // alias : 테이블별 파일 안에 작성한 SQL문을 가지는 변수
  // values : SQL 문 안에 선언한 '?'들을 대체할 값
  let conn = null;
  try {
    // pool에서 대기 중인 connection 가져옴
    conn = await connectionPool.getConnection();
    // 실제로 실행할 SQL문 선택
    let executeSql = sqlList[alias];
    // SQL문을 전달 후 결과받음
    let result = await conn.query(executeSql, values);
    return result;
  } catch (err) {
    console.log("SQL Error ===============");
    console.log(err);
  } finally {
    // 사용한 connection을 poll에 반납
    if (conn) conn.release();
  }
};

module.exports = {
  query,
};
