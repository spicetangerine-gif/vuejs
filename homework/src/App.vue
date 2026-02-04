<script setup>
import { ref } from "vue";
const memoList = ref(["예약하기", "자료 조사"]);
let newMemo = ref("");

const addMemo = () => {
  memoList.value.push(newMemo.value);
  newMemo.value = "";
};

// [미션 1] 반응형 데이터 만들기
// 1. 입력창의 값을 저장할 변수 (ref)
// 2. 메모들을 담을 배열 (ref, 초기값으로 한두 개 넣어두기) : '예약하기', '자료 조사'

// [미션 2] 함수 만들기
// 1. 메모 추가 함수: 배열에 추가하고 입력창 비우기
// 2. 메모 삭제 함수: Hint, splice 메소드 사용
// Array.splice(시작위치, 삭제갯수, 추가데이터);
// => memoList : ["예약하기", "자료 조사"];
// 1) 중간에 값 추가
// memoList.splice(1, 0, '운동가기');
// 2) 맨 첫번째 데이터 변경
// memoList.splice(0, 1, '약속 참석');
// 3) 맨 첫번재 데이터 삭제
// memoList.splice(0,1);

const delMemo = (index) => {
  memoList.value.splice(index, 1);
};
</script>

<template>
  <div class="memo-app">
    <h1>My Simple Memo</h1>

    <div class="input-container">
      <input type="text" v-model="newMemo" placeholder="메모를 입력하세요" />

      <button type="button" v-on:click="addMemo">등록</button>
    </div>

    <ul class="memo-list">
      <li v-for="(memo, index) in memoList">
        <span>{{ `${memo}` }}</span>
        <button class="del-btn" v-on:click="delMemo(index)">삭제</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.memo-app {
  max-width: 400px;
  margin: 50px auto;
  font-family: sans-serif;
  text-align: center;
}
.input-container {
  display: flex;
  gap: 5px;
  margin-bottom: 20px;
}
input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  outline: none;
}
input:focus {
  border-color: #42b883;
}
button {
  padding: 10px;
  background-color: #42b883;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.memo-list {
  list-style: none;
  padding: 0;
}
li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  border-bottom: 1px solid #eee;
}
.del-btn {
  background-color: #ff5c5c;
  color: white;
  padding: 5px 10px;
  font-size: 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
