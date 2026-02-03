<!-- views/RefVSReactive.vue -->
<script setup>
import { reactive } from "vue";

//Reactive : CRUD가 가능한 반응형 객체를 만드는 함수 중하나
//    => Ref와 차이점 1) 객체, 배열만 가능 2) 재할당 불가

const today = new Date();
let timeStr = today.toLocaleTimeString();
const timeStrReactive = reactive({ time: timeStr });

function changeTime() {
  const newDate = new Date();
  const newTimeStr = newDate.toLocaleTimeString();
  timeStrReactive.time = newTimeStr;
}
setInterval(changeTime, 1000);
</script>
<template>
  <p>처음 시간 : {{ timeStr }}</p>
  <P>현재 시간(rective) : {{ timeStrReactive.time }}</P>
</template>
