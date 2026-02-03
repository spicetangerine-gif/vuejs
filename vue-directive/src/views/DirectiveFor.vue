<!-- DirectiveFor.vue -->
<script setup>
import { ref } from "vue";
const aray = ["마우스", "키보드", "USB", "마우스패드"];
const itemList = ref(aray);
const firends = ref(["홍길동", "김명선"]);
let newFriend = ref("박우석");
// 함수
const addFirend = () => {
  firends.value.push(newFriend.value);
  newFriend.value = "";
};
</script>
<template>
  <h2>전자기기 목록</h2>
  <ul>
    <li v-for="item in itemList">{{ item }}</li>
  </ul>
  <hr />
  <h2>친구 목록</h2>
  새로운 친구 :
  <input type="text" v-model="newFriend" v-on:change="addFirend" />
  <ul>
    <li v-for="(name, idx) in firends">
      {{ `${idx} : ${name}` }}
    </li>
  </ul>
</template>
