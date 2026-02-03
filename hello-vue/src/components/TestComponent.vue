<!-- TestComponent.vue -->
<!-- Component : HTML + CSS + Javascript -->
<script setup>
import { ref } from "vue";

let message = ref("메세지를 입력해주세요");
</script>
<template>
  <div>
    <h1>{{ message }}</h1>
    <input type="text" v-model="message" />
  </div>
</template>
<style></style>
