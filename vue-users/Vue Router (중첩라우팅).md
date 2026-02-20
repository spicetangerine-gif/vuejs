# Vue Router (중첩라우팅)

생성일: 2026년 2월 11일 오후 12:47

# 중첩 라우팅이란?

- 웹 애플리케이션의 UI가 여러 단계의 컴포넌트로 계층화되어 있을 때 사용
- URL의 경로에 맞춰 하위 컴포넌트를 부모 컴포넌트 내부에 삽입하여 렌더링하는 방식
- 헤더, 사이드바 등 공통 UI는 고정하고 본문 내용만 변경되는 복잡한 페이지 구조에 필수
(예: 대시보드, 마이페이지, 설정화면 등)
    
    

## 실습진행

1. nestedRoute.js ( src/router/nestedRoute.js)
    
    ```jsx
    import { createRouter, createWebHistory } from "vue-router";
    import AppTop from "@/views/AppTop.vue";
    
    const router = createRouter({
      // history 모드 설정
      history: createWebHistory(import.meta.env.BASE_URL),
      routes: [
        {
          path: "/", // 라우트의 경로(필수)
          name: "main", // 라우트의 이름(선택)
          component: AppTop, // 라우트의 컴포넌트(필수)
        },
        {
          path: "/member/list",
          name: "memberList",
          // 동적으로 컴포넌트 호출
          component: () => import("@/views/member/MemberList.vue"),
          children: [
            {
              path: "detail/:id", //해당 값(id)가 필수
              name: "memberDetail",
              component: () => import("@/views/member/MemberDetail.vue"),
            },
            {
              path: "member/add",
              name: "memberAdd",
              // 동적 컴포넌트 호출
              component: () => import("@/views/member/MemberAdd.vue"),
            },
          ],
        },
      ],
    });
    
    export default router;
    
    ```
    
2. MemberList.vue (src/views/member/MemberList.vue)
    
    ```html
    <!-- 
    	key속성과 route의 fullPath속성을 바인딩해서 
    	컴포넌트 재활용시 데이터에 따라 변경되도록 설정 
    -->
    <RouterView v-bind:key="$route.fullPath" />
    ```
    
3. main.js (src/main.js)
    
    ```jsx
    import "./assets/main.css";
    
    import { createApp } from "vue";
    import { createPinia } from "pinia";
    import piniaPlugin from "pinia-plugin-persistedstate";
    
    const pinia = createPinia();
    pinia.use(piniaPlugin);
    
    import App from "./App.vue";
    import router from "./router/nestedRoute.js";
    
    const app = createApp(App);
    
    app.use(pinia);
    app.use(router);
    
    app.mount("#app");
    ```