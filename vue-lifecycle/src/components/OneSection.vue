<!-- components/OneSection.vue -->
<script setup>
import { ref } from "vue";
const content = ref("");
</script>
<template>
  <section class="box">
    <h4>한개의 컴포넌트</h4>
    <p>{{ content }}</p>
    <input v-model="content" />
  </section>
</template>
<style>
.box {
  border: 1px dashed green;
  margin: 10px;
}
</style>
