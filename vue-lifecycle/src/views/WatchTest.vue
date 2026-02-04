<!-- views/WatchTest.vue -->
<script setup>
import { ref, computed, watch } from "vue";

// Data
const forbiddenInput = ref("바보,멍청이");
const memoContent = ref("");
// 알림메세지
const message = ref("");
// 비활성화 제어
const isBlocked = ref(false);

// forbiddenInput => 배열로 변환 ['바보','멍청이'];
const forbiddenWords = computed(() => {
  return forbiddenInput.value.split(",");
});

// 본문내용 감시 => 금지어를 사용했는지 확인이 필요
watch(memoContent, (newValue, oldValue) => {
  for (let i = 0; i < forbiddenWords.value.length; i++) {
    let word = forbiddenWords.value[i];
    if (newValue.includes(word)) {
      // 금지어가 포함된 경우
      message.value = `경고: [${word}]은 금지어입니다. 입력이 차단되었습니다.`;
      isBlocked.value = true;
    }
  }
});

// 전체 설정 초기화
const resetAll = () => {
  memoContent.value = "";
  message.value = "";
  isBlocked.value = false;
};
</script>
<template>
  <h3>콘텐츠 보안 적용</h3>
  <div>
    <label>금지어 설정: </label>
    <input
      v-model="forbiddenInput"
      type="text"
      placeholder="금지어를 쉼표로 구분"
    />
    <div>
      <textarea
        v-model="memoContent"
        :disabled="isBlocked"
        placeholder="내용을 입력하세요.."
        row="10"
        cols="50"
      ></textarea>
    </div>

    <p v-if="message != ''" style="color: red; font-weight: bold">
      {{ message }}>
    </p>

    <button v-show="isBlocked" @click="resetAll">시스템 초기화</button>
  </div>
</template>
