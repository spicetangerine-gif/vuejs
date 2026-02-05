<!-- MultiComponentApp.vue -->
<script setup>
// 자식 컴포넌트는 <template> 안에서 태그로 인식됨
import OneSection from "@/components/OneSection.vue";
import { ref } from "vue";
const postList = ref([
  { name: "김민교", message: "Hello" },
  { name: "김상우", message: "Good Monrning" },
  { name: "이한나", message: "Today is ..." },
]);

// 이벤트 핸들러
const msgHandler = () => {
  alert("자식 컴포넌트의 메세지 처리");
};
const startName = ref("부모");
const startPoint = ref(0);
const createStarPoint = (target, name) => {
  console.log(target, name);
  startName.value = name;
  startPoint.value = Math.ceil(Math.random() * 5);
};
</script>
<template>
  <h1>컴포넌트 기초</h1>
  <section>
    <h2>컴포넌트 1개</h2>
    <!-- 자식 컴포넌트는 부모 컴포넌트의 화면을 구성하는 일부 -->
    <OneSection v-bind:title="'Hello, World'" />
  </section>
  <p>{{ startName }}/별점 : {{ startPoint }}</p>
  <section>
    <h2>컴포넌트 여러개</h2>
    <OneSection
      v-for="post in postList"
      v-bind:content="post.message"
      v-on:sendMsg="msgHandler"
      v-on:callStarPoint="createStarPoint"
    />
  </section>
</template>
<style>
section {
  border: 1px solid blue;
  margin: 10px;
}
</style>
