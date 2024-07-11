<template>
  <div class="relative h-screen overflow-x-hidden">
    <div class="absolute inset-0">
      <div class="w-[1280px] h-[360px] absolute inset-0 mx-auto">
        <img 
          src="../assets/images/pic.jpg"
          alt="背景圖"
          class="w-full h-full object-cover filter opacity-8"
        >
      </div>
      <div class="w-[1280px] h-[360px] absolute inset-0 bg-black opacity-35"></div>
    </div>
    <div class="absolute left-10 top-24 text-[#EBE5BA] space-y-4">
      <h1 class="text-4xl font-bold">加入食享</h1>
      <h2 class="text-2xl">一起來探索你的美食足跡，發現世界各地的美味佳餚</h2>
      <h3 class="text-lg w-3/6">
        食享 (TasteJoy) 是一款專為美食愛好者設計的網站，
        讓您可以在全球範圍內探索、發現並記錄各種美食的足跡。
        無論您身處何地，我們都將帶您走進本地的美食天堂。
      </h3>
    </div>
  </div>

  <div class="absolute left-10 top-[500px] bg-white text-center">
    <h3 class="text-xl font-semibold text-[#6F6D55] mt-2 mb-2">功能介紹</h3>
    <div class="flex justify-center space-x-6">
      <div class="w-1/5 aspect-w-1 aspect-h-1 max-w-[220px] max-h-[220px]">
        <a href="#records">
          <img src="../assets/images/pic.jpg" alt="功能圖片1" class="w-full h-full object-cover rounded-lg cursor-pointer">
          <p class="text-xs text-[#6F6D55] mt-2">紀錄自己的美食地圖</p>
        </a>
      </div>
      <div class="w-1/5 aspect-w-1 aspect-h-1 max-w-[220px]">
        <a href="#categories">
          <img src="../assets/images/pic.jpg" alt="功能圖片2" class="w-full h-full object-cover rounded-lg cursor-pointer">
          <p class="text-xs text-[#6F6D55] mt-2">自訂美食分類</p>
        </a>
      </div>
      <div class="w-1/5 aspect-w-1 aspect-h-1 max-w-[220px]">
        <a href="#randomSelected">
          <img src="../assets/images/pic.jpg" alt="功能圖片3" class="w-full h-full object-cover rounded-lg cursor-pointer">
          <p class="text-xs text-[#6F6D55] mt-2">隨機選美食</p>
        </a>
      </div>
      <div class="w-1/5 aspect-w-1 aspect-h-1 max-w-[220px]">
        <a href="#articlesSharing">
          <img src="../assets/images/pic.jpg" alt="功能圖片4" class="w-full h-full object-cover rounded-lg cursor-pointer">
          <p class="text-xs text-[#6F6D55] mt-2">美食文章分享</p>
        </a>
      </div>
      <div class="w-1/5 aspect-w-1 aspect-h-1 max-w-[220px]">
        <a href="#shareWithFriends">
          <img src="../assets/images/pic.jpg" alt="功能圖片5" class="w-full h-full object-cover rounded-lg cursor-pointer">
          <p class="text-xs text-[#6F6D55] mt-2">和朋友分享美食紀錄</p>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
html, body {
  overflow-x: hidden;
}
</style>
