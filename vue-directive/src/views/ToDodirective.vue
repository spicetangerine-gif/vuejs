<!-- views/ToDoDirective.vue -->
<template>
  <div id="myDIV" class="header">
    <h2>My To Do List</h2>
    <input type="text" id="myInput" placeholder="Title..." v-model="newTask" />
    <span v-on:click="newElement()" class="addBtn">Add</span>
  </div>

  <ul id="myUL">
    <li
      v-for="todo in todos"
      v-bind:class="{ checked: todo.complete }"
      v-on:click="todoCompleted(todo.no)"
    >
      {{ todo.task }}
      <span class="close" v-on:click.stop="delTodo(todo.no)">X</span>
    </li>
  </ul>
</template>
<script setup>
import { ref, reactive } from "vue";
const todos = reactive([
  { no: 1, task: "Hit the gym", complete: false },
  { no: 2, task: "Pay bills", complete: true },
  { no: 3, task: "Meet George", complete: false },
  { no: 4, task: "Buy eggs", complete: false },
  { no: 5, task: "Read a book", complete: false },
  { no: 6, task: "Organize office", complete: false },
]);

// todo 삭제 함수 => 배열의 데이터를 삭제
const delTodo = (selectedNo) => {
  // 사용자가 선택한 데이터의 값 => 인덱스 반환
  let delIdx = todos.findIndex((todo) => todo.no == selectedNo);
  todos.splice(delIdx, 1);
};

// todo 완료여부 함수 => li 태그의 class 속성 값 제어
const todoCompleted = (selectedNo) => {
  for (let i = 0; i < todos.length; i++) {
    let info = todos[i];
    if (info.no == selectedNo) {
      // 사용자가 선택한 todo일 경우
      // toggle 방식 => 원래 값이 true면 false가 되도록
      //                원래 값이 false면 true가 되도록
      info.complete = !info.complete;
    }
  }
};
//input 태그에 연결될 변수
const newTask = ref("");
// Add에 연결될 함수
const newElement = () => {
  let lastTodo = todos[todos.length - 1];
  let newNo = lastTodo.no + 1;
  let newTodo = {
    no: newNo,
    task: newTask.value,
    complete: false,
  };
  todos.push(newTodo);
  newTask.value = "";
};
</script>
<style>
/* Include the padding and border in an element's total width and height */
* {
  box-sizing: border-box;
}

/* Remove margins and padding from the list */
ul {
  margin: 0;
  padding: 0;
}

/* Style the list items */
ul li {
  cursor: pointer;
  position: relative;
  padding: 12px 8px 12px 40px;
  background: #eee;
  font-size: 18px;
  transition: 0.2s;

  /* make the list items unselectable */
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Set all odd list items to a different color (zebra-stripes) */
ul li:nth-child(odd) {
  background: #f9f9f9;
}

/* Darker background-color on hover */
ul li:hover {
  background: #ddd;
}

/* When clicked on, add a background color and strike out text */
ul li.checked {
  background: #888;
  color: #fff;
  text-decoration: line-through;
}

/* Add a "checked" mark when clicked on */
ul li.checked::before {
  content: "";
  position: absolute;
  border-color: #fff;
  border-style: solid;
  border-width: 0 2px 2px 0;
  top: 10px;
  left: 16px;
  transform: rotate(45deg);
  height: 15px;
  width: 7px;
}

/* Style the close button */
.close {
  position: absolute;
  right: 0;
  top: 0;
  padding: 12px 16px 12px 16px;
}

.close:hover {
  background-color: #f44336;
  color: white;
}

/* Style the header */
.header {
  background-color: #f44336;
  padding: 30px 40px;
  color: white;
  text-align: center;
}

/* Clear floats after the header */
.header:after {
  content: "";
  display: table;
  clear: both;
}

/* Style the input */
input {
  margin: 0;
  border: none;
  border-radius: 0;
  width: 75%;
  padding: 10px;
  float: left;
  font-size: 16px;
}

/* Style the "Add" button */
.addBtn {
  padding: 10px;
  width: 25%;
  background: #d9d9d9;
  color: #555;
  float: left;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 0;
}

.addBtn:hover {
  background-color: #bbb;
}
</style>
