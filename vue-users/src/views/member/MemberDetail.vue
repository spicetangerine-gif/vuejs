<!-- views/member/MemberDetail.vue -->
<script setup>
import { useRoute, RouterLink } from "vue-router";
import { onBeforeMount, ref } from "vue";
const member = ref({}); // 회원정보
const route = useRoute(); // 호출당한 정보
const memId = route.params.id;
//console.log(memId);
const server = "https://jsonplaceholder.typicode.com";
const findMemberById = async (memberId) => {
  let info = await fetch(`${server}/users/${memberId}`)
    .then((res) => res.json())
    .catch((err) => console.log(err));
  //console.log(info);
  member.value = info;
};

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
