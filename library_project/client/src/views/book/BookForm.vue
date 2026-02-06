<!-- views/book/BookFrom.vue -->
<script setup>
import { ref } from "vue";
import axios from "axios";
let bookInfo = ref({}); // 사용자가 입력한 도서정보

// 서버에 등록할 정보를 전달
const bookInsert = async () => {
  // 1) 전달할 정보 정리 : 가능한 불필요한 정보를 포함하지 않도록 함.
  let obj = {
    name: bookInfo.value.name,
    writer: bookInfo.value.writer,
    publisher: bookInfo.value.publisher,
    publication_date: bookInfo.value.publication_date,
    info: bookInfo.value.info,
  };
  // 2) AJAX : 서버에 전달
  // router.post(`/books`
  let result = await axios
    .post(`/api/books`, obj)
    .catch((err) => console.log(err));
  // 3) 결과 처리
  let addRes = result.data;
  if (addRes.isSuccessed) {
    alert("등록되었습니다.");
    bookInfo.value.no = addRes.bookNo;
  } else {
    alert("등록되지 않았습니다.\n데이터를 확인해보세요.");
  }
};
</script>

<template>
  <div class="container">
    <!-- v-model ) Form 입력 바인딩, 입력태그에 연결해서 사용.
                연결된 프로퍼티의 값을 태그에 출력하거나 사용자가 입력한 값을 프로퍼티에 전달 -->
    <label for="no">No.</label>
    <input type="text" id="no" v-model="bookInfo.no" readonly />

    <label for="name">도서명</label>
    <input type="text" id="name" v-model="bookInfo.name" />

    <label for="writer">저자</label>
    <input type="text" id="writer" v-model="bookInfo.writer" />

    <label for="publisher">출판사</label>
    <input type="text" id="publisher" v-model="bookInfo.publisher" />

    <label for="publication_date">출판일자</label>
    <input
      type="date"
      id="publication_date"
      v-model="bookInfo.publication_date"
    />

    <label for="info">소개</label>
    <textarea
      id="info"
      style="height: 200px"
      v-model="bookInfo.info"
    ></textarea>

    <button type="button" class="btn btn-xs btn-info" @click="bookInsert()">
      저장
    </button>
  </div>
</template>
