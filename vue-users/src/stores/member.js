import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useMemberStore = defineStore(
  "member",
  () => {
    // 저장소 구성 => Member
    // state : 관리 데이터
    // 전체 회원 정보
    const members = ref([]);
    // 선택한 회원정보
    const member = ref({});

    // getters

    // action
    // 서버에서
    const server = "https://jsonplaceholder.typicode.com";
    const findMemberList = async () => {
      const list = await fetch(`${server}/users`)
        .then((res) => res.json())
        .catch((err) => console.log(err));

      //console.log(list);
      members.value = list;
      // 구조분해하지 않고 사용하는 방법
      //counterStore.count = members.value.length;
    };

    // 서버에서 지정한 회원의 상세정보 가져오기
    const findMemberById = async (memberId) => {
      let info = await fetch(`${server}/users/${memberId}`)
        .then((res) => res.json())
        .catch((err) => console.log(err));
      //console.log(info);
      member.value = info;
    };

    // 서버에 회원 정보 등록하기
    const createMember = async (memberInfo) => {
      let info = await fetch(`${server}/users`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(memberInfo),
      })
        .then((res) => res.json())
        .catch((err) => console.log(err));
      return info.id;
    };
    return { members, member, findMemberList, findMemberById, createMember };
  },
  {
    persist: true,
  },
);
