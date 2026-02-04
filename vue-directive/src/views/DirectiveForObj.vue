<!-- DirectiveForObj.vue -->
<script setup>
import { ref } from "vue";

// Data : 객체 배열일 경우
const friends = ref([
  { id: "01", name: "홍길동", age: 22 },
  { id: "02", name: "김민석", age: 25 },
]);
</script>
<template>
  <h2>친구 목록</h2>
  <table>
    <tr>
      <th>ID</th>
      <th>이름</th>
      <th>나이</th>
    </tr>
  </table>
  <tbody>
    <tr v-for="info in friends" v-bind:key="info.id">
      <!-- info <=> { id: "01", name: "홍길동", age: 22 } -->
      <td>{{ info.id }}</td>
      <td>{{ info.name }}</td>
      <td>{{ info.age }}</td>
    </tr>
  </tbody>
</template>
