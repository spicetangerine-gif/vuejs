<!-- components/OneSection.vue -->
<script setup>
import { defineProps, defineEmits } from "vue";
//const content = ref("");
// props : 변수로 인식, 단 readonly 값
//defineProps(["content"]);
const props = defineProps({
  title: {
    type: String,
    default: "No title", // 기본값
  },
  content: {
    type: [String, Object],
    required: true, // 필수값
  },
});

// emit : 자식 => 부모, 메세지 혹은 데이터
//1) event(message)를 정의
const emit = defineEmits(["sendMsg", "callStarPoint"]);
//2) event를 발생
const emitTest = () => {
  emit("sendMsg");
};

const randomVal = () => {
  emit("callStarPoint", "자식", props.title); // 부모에게 전달할 데이터도 포함
};
</script>
<template>
  <section class="box">
    <h4>한개의 컴포넌트</h4>
    <p>{{ title }}</p>
    <p>{{ content }}</p>
    <!-- <input v-model="content" /> -->
    <button v-on:mouseover="emitTest()" v-on:click="randomVal()">클릭</button>
  </section>
</template>
<style>
.box {
  border: 1px dashed green;
  margin: 10px;
}
</style>
