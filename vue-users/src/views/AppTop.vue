<!-- AppTop.vue -->
<script setup>
import { RouterLink } from "vue-router";
import { useCounterStore } from "../stores/counter";
import { storeToRefs } from "pinia";
const store = useCounterStore();

// 주의: state와 getters는 그냥 구조 분해하면 반응성 해제
// storeToRefs를 사용해야 반응성을 유지
// action을 제외하고 state, getters를 저장소에 반환 : storeToRefs
const { count, doubleCount } = storeToRefs(store);

// actions는 일반 함수이므로 바로 구조 분해.
const { increment } = store;
</script>
<template>
  <h1>Top</h1>
  <p>Top</p>
  <h3>총 회원수 : {{ count }}명</h3>
  <p><RouterLink to="/member/list">회원관리는 여기서</RouterLink></p>
</template>
