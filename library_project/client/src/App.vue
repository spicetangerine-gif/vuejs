<script setup>
import { RouterView } from "vue-router";
import HeaderComponent from "./layouts/HeaderComponent.vue";
import FooterComponent from "./layouts/FooterComponent.vue";
</script>
<template>
  <div>
    <!-- Header -->
    <HeaderComponent />
    <!-- Main : Content 영역 -->
    <RouterView />
    <!-- Footer -->
    <FooterComponent />
  </div>
</template>
