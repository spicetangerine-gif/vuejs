<!-- views/book/BookList.vue -->
<script setup>
import { ref, computed, onBeforeMount } from "vue";
import axios from "axios";

let bookList = ref([]); // 도서 전체 목록

// 현재 출력하는 데이터의 총 갯수
const count = computed(() => {
  return bookList.value.length;
});

// 서버에서 데이터 가져오기
const getBookList = async () => {
  let result = await axios(`/api/books`).catch((err) => console.log(err));
  bookList.value = result.data;
};

import { useRouter } from "vue-router";
const router = useRouter();
const goToDetail = (bookNo) => {
  router.push({ path: "info", query: { no: bookNo } });
};

onBeforeMount(() => {
  getBookList();
});
</script>
<template>
  <div class="container">
    <table class="table table-hover">
      <!--  수정1) tbody에 출력되는 데이터 총 수 -->
      <caption>
        total :
        {{
          count
        }}
      </caption>
      <thead>
        <tr>
          <th>No.</th>
          <th>도서명</th>
          <th>저자</th>
          <th>출판사</th>
          <th>출판일수</th>
        </tr>
      </thead>
      <tbody>
        <!-- 수정2) 실제 데이터를 기준으로 출력되는 부분 -->
        <tr v-for="book in bookList" v-on:click="goToDetail(book.no)">
          <td>{{ book.no }}</td>
          <td>{{ book.name }}</td>
          <td>{{ book.writer }}</td>
          <td>{{ book.publisher }}</td>
          <td>{{ book.publication_date }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style scoped>
table * {
  text-align: center;
}
</style>
