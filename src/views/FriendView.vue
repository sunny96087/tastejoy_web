<script setup></script>

<template>
  <div class="friend text-[16px] text-green4">
    <div class="content border border-green2 mx-10 my-4 rounded-[16px] overflow-hidden">
      <div class="title border-b border-green2 py-3 px-5 text-[24px] font-medium">
        <h1>好友分享的美食</h1>
      </div>
      <div class="text">
        <!-- <div class="w-10 h-10 rounded-full overflow-hidden">
          <img src="@/assets/images/pic.jpg " alt="圖片" class="pic-auto" /> -->
      </div>

      <!-- 表格標題 -->
      <div class="text-item border font-medium">
        <p class="w-20 text-center">圖片</p>

        <p class="grow">名稱</p>
        <p class="w-[120px] text-center">好友</p>

        <div class="text-items">
          <p class="p-[14px]">查看</p>
          <p class="p-[14px]">同意</p>
          <p class="p-[14px]">刪除</p>
        </div>
      </div>

      <!-- 表格內容 -->
      <div class="text-item border border-zinc-200">
        <div class="w-20">
          <div class="w-10 h-10 rounded-full overflow-hidden mx-auto">
            <img src="@/assets/images/pic.jpg " alt="圖片" class="pic-auto" />
          </div>
        </div>

        <p class="grow text-zinc-700">海底撈</p>
        <p class="w-[120px] text-center text-zinc-700">小明</p>

        <div class="flex">
          <div class="w-[36px] h-[36px] rounded-full overflow-hidden m-3">
            <img src="@/assets/images/eyes.png" alt="" class="pic-auto" />
          </div>
          <div class="w-[36px] h-[36px] rounded-full overflow-hidden m-3">
            <img src="@/assets/images/check.png" alt="" class="pic-auto" />
          </div>
          <div class="w-[36px] h-[36px] rounded-full overflow-hidden m-3">
            <img src="@/assets/images/trash.png" alt="" class="pic-auto" />
          </div>
        </div>
      </div>
      <div class="text-item border border-zinc-200">
        <div class="w-20">
          <div class="w-10 h-10 rounded-full overflow-hidden mx-auto">
            <img src="@/assets/images/pic.jpg " alt="圖片" class="pic-auto" />
          </div>
        </div>

        <p class="grow text-zinc-700">海底撈</p>
        <p class="w-[120px] text-center text-zinc-700">小明</p>

        <div class="flex">
          <div class="w-[36px] h-[36px] rounded-full overflow-hidden m-3">
            <img src="@/assets/images/eyes.png" alt="" class="pic-auto" />
          </div>
          <div class="w-[36px] h-[36px] rounded-full overflow-hidden m-3">
            <img src="@/assets/images/check.png" alt="" class="pic-auto" />
          </div>
          <div class="w-[36px] h-[36px] rounded-full overflow-hidden m-3">
            <img src="@/assets/images/trash.png" alt="" class="pic-auto" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pic-auto {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.text-item {
  @apply flex gap-12 items-center;
}
.text-items {
  @apply flex;
}
</style>
