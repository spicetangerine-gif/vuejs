<!-- views/member/MemberDetail.vue -->
<script setup>
import { useRoute, RouterLink } from "vue-router";
import { onBeforeMount, ref } from "vue";

const route = useRoute(); // 호출당한 정보
const memId = route.params.id;
//console.log(memId);
import { useMemberStore } from "@/stores/member";
import { storeToRefs } from "pinia";

const memberStore = useMemberStore();

const { member } = storeToRefs(memberStore);
const { findMemberById } = memberStore;

onBeforeMount(() => {
  findMemberById(memId);
});
</script>
<template>
  <h1>회원관리</h1>
  <p>
    <RouterLink :to="{ name: 'main' }">Top</RouterLink>>
    <RouterLink :to="{ path: '/member/list' }"> 회원 리스트</RouterLink>
    > 회원 상세 정보
  </p>
  <h3>회원 상세 정보</h3>
  <div>
    <div><span>ID </span>{{ member.id }}</div>
    <div><span>이름 </span>{{ member.name }}</div>
    <div><span>이메일 </span>{{ member.email }}</div>
    <div><span>연락처 </span>{{ member.phone }}</div>
  </div>
</template>
<style>
span {
  font-weight: bold;
}
</style>
