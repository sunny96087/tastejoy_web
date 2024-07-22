<script setup>
import { ref, watch, computed, onMounted, onBeforeUnmount } from 'vue'
import infoRecord from './FoodRecordInfo.vue'

// 紀錄詳細按鈕
const isShowInfoRecord = ref(false)
const showInfoRecord = () => {
  isShowInfoRecord.value = true
}
</script>

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

      <!-- * mb -->
      <div class="lg:hidden p-3 flex flex-col gap-3">
        <div class="border border-green-2 rounded-2xl overflow-hidden">
          <div class="flex items-center border-b border-zinc-200">
            <div class="p-[10px]">
              <div class="w-10 h-10 rounded-full overflow-hidden mx-auto">
                <img src="@/assets/images/pic.jpg " alt="圖片" class="pic-auto" />
              </div>
            </div>
            <div class="grow px-3 py-2 gap-1 flex flex-col">
              <div class="text-green-4 text-[14px]">小明</div>
              <div class="text-zinc-700">海底撈</div>
            </div>
          </div>

          <div class="flex justify-end">
            <button
              class="w-[36px] h-[36px] rounded-full overflow-hidden m-3"
              @click="showInfoRecord"
            >
              <img src="@/assets/images/eyes.png" alt="" class="pic-auto" />
            </button>
            <button class="w-[36px] h-[36px] rounded-full overflow-hidden m-3">
              <img src="@/assets/images/check.png" alt="" class="pic-auto" />
            </button>
            <button class="w-[36px] h-[36px] rounded-full overflow-hidden m-3">
              <img src="@/assets/images/trash.png" alt="" class="pic-auto" />
            </button>
          </div>
        </div>

        <div class="border border-green-2 rounded-2xl overflow-hidden">
          <div class="flex items-center border-b border-zinc-200">
            <div class="p-[10px]">
              <div class="w-10 h-10 rounded-full overflow-hidden mx-auto">
                <img src="@/assets/images/pic.jpg " alt="圖片" class="pic-auto" />
              </div>
            </div>
            <div class="grow px-3 py-2 gap-1 flex flex-col">
              <div class="text-green-4 text-[14px]">小明</div>
              <div class="text-zinc-700">海底撈</div>
            </div>
          </div>

          <div class="flex justify-end">
            <button
              class="w-[36px] h-[36px] rounded-full overflow-hidden m-3"
              @click="showInfoRecord"
            >
              <img src="@/assets/images/eyes.png" alt="" class="pic-auto" />
            </button>
            <button class="w-[36px] h-[36px] rounded-full overflow-hidden m-3">
              <img src="@/assets/images/check.png" alt="" class="pic-auto" />
            </button>
            <button class="w-[36px] h-[36px] rounded-full overflow-hidden m-3">
              <img src="@/assets/images/trash.png" alt="" class="pic-auto" />
            </button>
          </div>
        </div>
      </div>

      <!-- * pc -->
      <div class="hidden lg:block">
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
            <button
              class="w-[36px] h-[36px] rounded-full overflow-hidden m-3"
              @click="showInfoRecord"
            >
              <img src="@/assets/images/eyes.png" alt="" class="pic-auto" />
            </button>
            <button class="w-[36px] h-[36px] rounded-full overflow-hidden m-3">
              <img src="@/assets/images/check.png" alt="" class="pic-auto" />
            </button>
            <button class="w-[36px] h-[36px] rounded-full overflow-hidden m-3">
              <img src="@/assets/images/trash.png" alt="" class="pic-auto" />
            </button>
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
            <button
              class="w-[36px] h-[36px] rounded-full overflow-hidden m-3"
              @click="showInfoRecord"
            >
              <img src="@/assets/images/eyes.png" alt="" class="pic-auto" />
            </button>
            <button class="w-[36px] h-[36px] rounded-full overflow-hidden m-3">
              <img src="@/assets/images/check.png" alt="" class="pic-auto" />
            </button>
            <button class="w-[36px] h-[36px] rounded-full overflow-hidden m-3">
              <img src="@/assets/images/trash.png" alt="" class="pic-auto" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- 詳細紀錄視窗 -->
    <infoRecord v-show="isShowInfoRecord" @closeInfoModal="isShowInfoRecord = false" />
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
