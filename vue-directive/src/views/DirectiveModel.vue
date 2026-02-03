<!-- views/DirectiveModel.vue -->
<script setup>
import { ref } from "vue";
const inputNameModel = ref("양방향");
const rCount = ref(5);
const textAreaInput = ref("입력하세요");
const memberType = ref("우수");
const isSelected = ref(null);
const gender = ref(null);
const selectOS = ref(["1", "3"]);
const choiceOS = ref(1);
const num = ref(0);
</script>
<template>
  <!-- 
   v-model : 기본적으로 value 속성에 자동 연결(바인딩)
       <input>, <textarea> <select>
        양방향 바인딩 ( HTML <=> 변수 )
        ref 함수 기반의 반응형 객체만 가능
   -->
  <h3>input 태그의 type 속성</h3>
  <input type="text" v-model.lazy="inputNameModel" />
  <p>{{ inputNameModel }}</p>
  <input type="number" v-model="num" />
  <p>{{ num + 1000 }}</p>
  <h3>textarea 태그</h3>
  <textarea v-bind:row="rCount" v-model="textAreaInput"></textarea>
  <p v-html="textAreaInput.replace(/\n/g, `<br>`)"></p>
  <h3>select 태그</h3>
  <select v-model="memberType">
    <option value="일반">일반회원</option>
    <option value="우수">우수회원</option>
    <option value="특별">특별회원</option>
  </select>
  <p>{{ memberType }}</p>
  <!--  Checkbox-->
  <hr />
  <h2>Checkbox 1개</h2>
  <label>
    <input type="checkbox" v-model="isSelected" value="A" />
    동의합니다.
  </label>
  <p>{{ isSelected }}</p>
  <label>
    <input
      type="checkbox"
      v-model="gender"
      true-value="여"
      false-value="남"
    />성별
  </label>
  <p>{{ gender }}</p>
  <h2>checkbox n개</h2>
  <label><input type="checkbox" v-model="selectOS" value="1" />macOS</label>
  <label><input type="checkbox" v-model="selectOS" value="2" />Window</label>
  <label><input type="checkbox" v-model="selectOS" value="3" />Linux</label>
  <p>{{ selectOS }}</p>
  <!-- Radio -->
  <h2>radio n개</h2>
  <label><input type="radio" v-model="choiceOS" value="1" />macOS</label>
  <label><input type="radio" v-model="choiceOS" value="2" />Window</label>
  <label><input type="radio" v-model="choiceOS" value="3" />Linux</label>
  <p>{{ choiceOS }}</p>
</template>
