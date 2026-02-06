<!-- views/member/MemberDetail.vue -->
<script setup>
import { RouterLink, useRouter } from "vue-router";
const router = useRouter(); // vue-router 자체를 호출
const member = ref({
  id: "",
  name: "",
  email: "",
  phone: "",
}); // 회원정보
const server = "https://jsonplaceholder.typicode.com";
const addMember = async () => {
  let info = await fetch(`${server}/users`, {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(member.value),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
  let newId = info.id;
  router.push({ name: "memberDetail", params: { id: newId } });
  //router.go(-1);
};

import { ref } from "vue";
// 서버와 통신하는 경우 필드명을 서버참조
</script>
<template>
  <h1>회원관리</h1>
  <p>
    <RouterLink :to="{ name: 'main' }">Top</RouterLink>
    > <RouterLink :to="{ path: '/member/list' }"> 회원 리스트</RouterLink>
    > 회원 정보 추가
  </p>
  <h3>회원 정보 추가</h3>
  <div>
    <h4>정보를 입력하고 등록 버튼을 클릭해주세요</h4>
    <div><span>ID</span><input type="text" v-model="member.id" /></div>
    <div><span>이름</span><input type="text" v-model="member.name" /></div>
    <div><span>이메일</span><input type="email" v-model="member.email" /></div>
    <div><span>연락처</span><input type="text" v-model="member.phone" /></div>
    <button type="button" v-on:click="addMember()">등록</button>
  </div>
</template>
