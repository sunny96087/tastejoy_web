<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
  
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
      <RouterLink to="/">
        <img src="../assets/images/NavBar/logo.png" alt="logo" class="w-10 h-10">
      </RouterLink>
      
      <ul class="hidden md:flex justify-around items-center">
        <li class="m-5">
          <RouterLink to="/about" class="text-[#6F6D55] font-bold">平台介紹</RouterLink>
        </li>
        <li v-if="isMember" class="m-5">
          <RouterLink to="/record" class="text-[#6F6D55]">我的紀錄</RouterLink>
        </li>
        <li class="m-5">
          <RouterLink to="/" class="text-[#6F6D55]">今天吃什麼</RouterLink>
        </li>
        <li class="m-5">
          <RouterLink to="/article" class="text-[#6F6D55]">美食文章</RouterLink>
        </li>
        <li v-if="isMember" class="m-5">
          <RouterLink to="/logout" class="text-[#6F6D55]">登出</RouterLink>
        </li>
        <li v-else class="m-5">
          <RouterLink to="/login" class="text-[#6F6D55]">登入/註冊</RouterLink>
        </li>
        <li v-if="isMember" class="m-5">
          <RouterLink to="/friendslist">
            <img src="../assets/images/NavBar/Users.png" alt="users">
          </RouterLink>
        </li>
        <li v-if="isMember" class="m-5">
          <RouterLink to="/info">
            <img src="../assets/images/NavBar/UserCircle.png" alt="personal">
          </RouterLink>
        </li>
        <li v-if="isNotice" class="m-5 h-auto">
          <RouterLink to="/friend">
            <img src="../assets/images/NavBar/BellRinging.png" alt="alert">
          </RouterLink> 
        </li>
      </ul>
      <div class="m-5 md:hidden">
        <button @click="clickMenu">
          <img src="../assets/images/NavBar/list.png" alt="list">
        </button>
      </div>
      <!-- 手機版才會有的清單列 -->
      <div v-if="isMenuOpen" class="bg-custom-color fixed top-20 right-0 h-full md:hidden">
        <ul class="h-full">
          <li v-if="!isMember" class="m-5 flex text-center">
            <RouterLink to="/login" class="text-[#6F6D55] text-center">登入/註冊</RouterLink>
          </li>
          <li v-if="isNotice" class="m-5 text-center bg-custom-alert-color">
            <RouterLink to="/friend" class="text-[#6F6D55]">
              好友送美食來囉
              <img src="../assets/images/NavBar/Cheers.png" class="inline" alt="cheer">
            </RouterLink> 
          </li>
          <li class="m-5 text-center">
            <RouterLink to="/about" class="text-[#6F6D55] hover:bg-custom-hover-color">
              平台介紹
            </RouterLink>
          </li>
          <li v-if="isMember" class="m-5 text-center">
            <RouterLink to="/record" class="text-[#6F6D55] hover:bg-custom-hover-color">
              我的紀錄
            </RouterLink>
          </li>
          <li class="m-5 text-center">        
            <RouterLink to="/" class="text-[#6F6D55] hover:bg-custom-hover-color">
              今天吃什麼
            </RouterLink>
          </li>
          <li class="m-5 text-center">            
            <RouterLink to="/article" class="text-[#6F6D55] hover:bg-custom-hover-color">
              美食文章
            </RouterLink>
          </li>
          <li class="m-5 text-center">
            <RouterLink to="/friendslist" class="text-[#6F6D55] hover:bg-custom-hover-color">
              我的好友
            </RouterLink>
          </li>
          <li class="m-5 text-center">      
            <RouterLink to="/info" class="text-[#6F6D55] hover:bg-custom-hover-color">
              個人資料
            </RouterLink>
          </li>
          <li v-if="isMember" class="fixed bottom-0 m-5">
            <RouterLink to="/logout" class="text-[#6F6D55] hover:bg-custom-hover-color">
              登出
            </RouterLink>
          </li>
          
        </ul>
      </div>
    </nav>
  </div>

  <RouterView />
</template>

<style scoped>

</style>
