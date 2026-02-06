<!-- views/book/BookInfo.vue -->
<script setup>
import { ref, onBeforeMount } from "vue";
import axios from "axios";

let bookInfo = ref({}); // 도서 정보

// 사용자가 선택한 도서번호로 상세 정보를 가져옴
const getBookInfo = async (selected) => {
  let result = await axios
    .get(`/api/books/${selected}`) // router.get(`/books/:no`)
    .catch((err) => console.log(err));
  bookInfo.value = result.data;
};

import { useRoute } from "vue-router";
const route = useRoute();

onBeforeMount(() => {
  let searchNo = route.query.no;
  getBookInfo(searchNo);
});
</script>
<template>
  <div class="container">
    <div class="row">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col" class="text-center table-primary">번호</th>
            <td scope="col" class="text-center">{{ bookInfo.no }}</td>
            <th scope="col" class="text-center table-primary">도서명</th>
            <td scope="col" class="text-center">{{ bookInfo.name }}</td>
            <th scope="col" class="text-center table-primary">저자</th>
            <td scope="col" class="text-center">{{ bookInfo.writer }}</td>
          </tr>

          <tr>
            <th scope="col" class="text-center table-primary">출판사</th>
            <td colspan="2" class="text-center">{{ bookInfo.publisher }}</td>
            <th scope="col" class="text-center table-primary">출판일자</th>
            <td colspan="2" class="text-center">
              {{ bookInfo.publication_date }}
            </td>
          </tr>
          <tr>
            <td colspan="6" class="text-center table-primary">책 소개</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="6" class="text-left" valign="top" height="200">
              <pre
                style="
                  white-space: pre-wrap;
                  border: none;
                  background-color: white;
                "
                >{{ bookInfo.info }}</pre
              >
            </td>
          </tr>
          <tr>
            <td colspan="6" class="text-center">
              <!-- 각 버튼에 이벤트 처리 필요-->
              <button class="btn btn-xs btn-info">수정</button>
              <button class="btn btn-xs btn-light">목록</button>
              <button class="btn btn-xs btn-danger">삭제</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
