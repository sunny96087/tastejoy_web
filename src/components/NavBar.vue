<script setup>
import { ref } from "vue";
  
  //先假設是已登入狀態 
  const isMember = ref(true);

</script>

<template>
  <div class="mx-auto my-0 border-b border-amber-400 mb-5">
    <nav class="w-full bg-custom-color flex justify-around items-center">
      <img src="" alt="logo">
      <ul class="hidden md:flex">
        <li class="m-5">
          <a class="text-custom-font-color" href="#">平台介紹</a>
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
        <li v-if="isMember" class="m-5">
          <img src="../assets/NavBar/BellRinging.png" alt="alert">
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>

</style>
