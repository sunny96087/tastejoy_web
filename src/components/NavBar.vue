<script setup>
import { ref } from "vue";
  
  // 先假設是已登入狀態 
  const isMember = ref(true);

  // 是否有好友推薦的餐廳
  const isNotice = ref(true);

  // 手機版頁面是否展開
  const isMenuOpen = ref(false);

  const clickMenu = () =>{
    isMenuOpen.value = !isMenuOpen.value;
  }

</script>

<template>
  <div class="w-full mx-auto my-0 border-b border-amber-400 mb-5">
    <nav class="w-full bg-custom-color flex justify-around items-center">
      <img src="../assets/NavBar/logo.png" alt="logo" class="w-10 h-10">
      <ul class="hidden md:flex justify-around">
        <li class="m-5">
          <a class="text-custom-font-color font-bold" href="#">平台介紹</a>
        </li>
        <li v-if="isMember" class="m-5">
          <a class="text-custom-font-color" href="#">我的紀錄</a>
        </li>
        <li class="m-5">
          <a class="text-custom-font-color" href="#">今天吃什麼</a>
        </li>
        <li class="m-5">
          <a class="text-custom-font-color" href="#">美食文章</a>
        </li>
        <li v-if="isMember" class="m-5">
          <a class="text-custom-font-color" href="#">登出</a>
        </li>
        <li v-else class="m-5">
          <a class="text-custom-font-color" href="#">登入/註冊</a>
        </li>
        <li v-if="isMember" class="m-5">
          <img src="../assets/NavBar/Users.png" alt="users">    
        </li>
        <li v-if="isMember" class="m-5">
          <img src="../assets/NavBar/UserCircle.png" alt="personal">
        </li>
        <li v-if="isNotice" class="m-5">
          <img src="../assets/NavBar/BellRinging.png" alt="alert">
        </li>
      </ul>
      <div class="m-5 md:hidden">
        <button @click="clickMenu">
          <img src="../assets/NavBar/list.png" alt="list">
        </button>
      </div>
      <!-- 手機版才會有的清單列 -->
      <div v-if="isMenuOpen" class="bg-custom-color fixed top-20 right-0 h-full md:hidden">
        <ul class="h-full">
          <li v-if="!isMember" class="m-5 flex text-center">
            <a class="text-custom-font-color text-center" href="#">登入/註冊</a>
          </li>
          <li v-if="isNotice" class="flex m-5 text-center bg-custom-alert-color">
            <a class="text-custom-font-color" href="#">好友送美食來囉</a>
            <img src="../assets/NavBar/Cheers.png" alt="cheer">
          </li>
          <li class="m-5 text-center">
            <a class="text-custom-font-color hover:bg-custom-hover-color" href="#">平台介紹</a>
          </li>
          <li v-if="isMember" class="m-5 text-center">
            <a class="text-custom-font-color hover:bg-custom-hover-color" href="#">我的紀錄</a>
          </li>
          <li class="m-5 text-center">
            <a class="text-custom-font-color hover:bg-custom-hover-color" href="#">今天吃什麼</a>
          </li>
          <li class="m-5 text-center">
            <a class="text-custom-font-color hover:bg-custom-hover-color" href="#">美食文章</a>
          </li>
          <li class="m-5 text-center">
            <a class="text-custom-font-color hover:bg-custom-hover-color" href="#">我的好友</a>
          </li>
          <li class="m-5 text-center">
            <a class="text-custom-font-color hover:bg-custom-hover-color" href="#">個人資料</a>
          </li>
          <li v-if="isMember" class="fixed bottom-0 m-5">
            <a class="text-custom-font-color hover:bg-custom-hover-color" href="#">登出</a>
          </li>
          
        </ul>
      </div>
    </nav>
  </div>
</template>

<style scoped>

</style>
