<!-- views/member/MemberList.vue -->
<script setup>
import { RouterLink, useRouter } from "vue-router";
const router = useRouter();
const goToDetail = (memberId) => {
  router.push({ name: "memberDetail", params: { id: memberId } });
};
import { onBeforeMount, ref } from "vue";

// 사용하고자 하는 저장소 정의
import { useMemberStore } from "@/stores/member";
import { storeToRefs } from "pinia";

const memberStore = useMemberStore();

const { members } = storeToRefs(memberStore);
const { findMemberList } = memberStore;

// Lifecycle Hook 중 가장 먼저 실행
// Lifecycle Hook은 마지막에 작성
onBeforeMount(() => {
  findMemberList();
});
</script>
<template>
  <h1>회원 관리</h1>
  <p><RouterLink v-bind:to="{ name: 'main' }">Top</RouterLink> > 회원 리스트</p>
  <h3>회원 리스트</h3>
  <p>
    신규등록은 <RouterLink :to="{ path: '/member/add' }">여기</RouterLink> 를
    클릭
  </p>
  <ul>
    <li v-for="info in members" v-on:click="goToDetail(info.id)">
      ID가 {{ info.id }}인 {{ info.name }}님
    </li>
  </ul>
</template>
