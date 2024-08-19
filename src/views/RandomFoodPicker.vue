<script setup>
import { ref, watch, computed, onMounted, onBeforeUnmount } from 'vue'
import { useCountryStore } from '../stores/country.js'
import randomFood from '../views/RandomFoodPicker.vue'
import publicFood from '../views/PublicFoodSelector.vue'
import randomCategory from '../views/RandomCategoryPicker.vue'
import { RouterLink, useRoute } from 'vue-router'

// 判斷模式
const route = useRoute()
const isRandomFoodView = ref(false)
const isPublicFoodView = ref(false)
const isRandomCategoryView = ref(false)

const updateView = () => {
  isRandomFoodView.value = route.path === '/randomfood'
  isPublicFoodView.value = route.path === '/publicfood'
  isRandomCategoryView.value = route.path === '/randomcategory'
}

//取得縣市資料
const countries = ref([])
countries.value = useCountryStore().cities

//取得鄉鎮市區資料
const selectedCountry = ref('全部地區')
const selectedTown = ref('全部地區')
const towns = ref([])
watch(selectedCountry, (newVal) => {
  selectedTown.value = '全部地區'
  towns.value = useCountryStore().towns(newVal)
})
</script>

<template>
  <div class="mx-10 mt-5">
    <div
      class="w-[336px] border border-green-4 p-1 gap-2 flex justify-around rounded-full overflow-hidden"
    >
      <router-link
        to="/randomfood"
        class="text-green-4 hover:text-white-1 hover:bg-green-4 rounded-full text-center cursor-pointer px-3 py-[6px]"
        :class="{ 'bg-green-4 text-white-1': isRandomFoodView }"
        >隨機抽美食</router-link
      >

      <router-link
        to="/publicfood"
        class="text-green-4 hover:text-white-1 hover:bg-green-4 rounded-full text-center cursor-pointer px-3 py-[6px]"
        :class="{ 'bg-green-4 text-white-1': isPublicFoodView }"
        >抽公開美食</router-link
      >

      <router-link
        to="/randomcategory"
        class="text-green-4 hover:text-white-1 hover:bg-green-4 rounded-full text-center cursor-pointer px-3 py-[6px]"
        :class="{ 'bg-green-4 text-white-1': isRandomCategoryView }"
        >隨機抽類別</router-link
      >
    </div>
    <div class="flex flex-col gap-4 border border-green-2 rounded-2xl p-5 mt-4">
      <div class="flex flex-col gap-2">
        <label class="block text-gray-700">想吃的類別</label>
        <div class="flex justify-between gap-2">
          <input
            type="text"
            id=""
            class="bg-transparent rounded-full border border-green-4 py-[10px] px-3 w-flex-1056 placeholder-zinc-400"
            placeholder="點擊右側按鈕選取"
            readonly
          />
          <button
            id=""
            class="rounded-full border border-green-4 text-green-4 px-4 py-[10px] w-flex-96 whitespace-nowrap"
          >
            選擇分類
          </button>
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <p class="text-zinc-700">想抽幾個</p>
        <label for="" class="text-zinc-700 sr-only">想抽幾個</label>
        <select
          id=""
          name=""
          class="block appearance-none w-full rounded-full border border-green-4 py-[10px] px-3 text-zinc-700 focus:ring-1 focus:ring-inset focus:ring-green-4 custom-select sm:text-sm"
        >
          <option>一個</option>
          <option>兩個</option>
          <option>三個</option>
          <option>四個</option>
          <option>五個</option>
          <option>六個</option>
        </select>
      </div>
      <div class="flex flex-col gap-2">
        <p class="text-zinc-700">地區</p>
        <select
          id=""
          name=""
          class="rounded-full border border-green-4 bg-white-1 py-[10px] px-3 text-zinc-700 focus:ring-1 focus:ring-inset focus:ring-green-4 custom-select"
          v-model="selectedCountry"
        >
          <option value="全部地區">全部地區</option>
          <option v-for="(country, id) in countries" :key="id" :value="country">
            {{ country }}
          </option>
        </select>
      </div>

      <div class="flex justify-end gap-4">
        <button
          id=""
          type="reset"
          class="flex gap-[6px] rounded-full border border-green-4 text-green-4 px-5 py-[10px] whitespace-nowrap"
        >
          清空篩選<svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.5 10.0001C17.5002 11.9719 16.7239 13.8644 15.3391 15.2681C13.9543 16.6718 12.0724 17.4736 10.1008 17.5001H10C8.08456 17.5049 6.24085 16.7719 4.85156 15.4532C4.7919 15.3968 4.74394 15.3292 4.71042 15.2542C4.67689 15.1793 4.65846 15.0984 4.65618 15.0163C4.65389 14.9343 4.6678 14.8525 4.6971 14.7758C4.7264 14.6991 4.77053 14.6289 4.82695 14.5693C4.88338 14.5096 4.95101 14.4616 5.02597 14.4281C5.10093 14.3946 5.18176 14.3762 5.26385 14.3739C5.34593 14.3716 5.42767 14.3855 5.50438 14.4148C5.58109 14.4441 5.65128 14.4882 5.71094 14.5446C6.60453 15.3874 7.72663 15.9481 8.93705 16.1568C10.1475 16.3655 11.3926 16.213 12.5168 15.7182C13.641 15.2233 14.5945 14.4083 15.2582 13.3747C15.9218 12.3411 16.2663 11.1349 16.2484 9.90678C16.2305 8.67863 15.8512 7.48296 15.1577 6.46914C14.4642 5.45533 13.4874 4.66833 12.3493 4.20644C11.2112 3.74455 9.96216 3.62826 8.75832 3.8721C7.55447 4.11594 6.44916 4.70909 5.58047 5.57746C5.57409 5.58436 5.5673 5.59088 5.56016 5.59699L3.48359 7.50011H5.625C5.79076 7.50011 5.94973 7.56596 6.06694 7.68317C6.18415 7.80038 6.25 7.95935 6.25 8.12511C6.25 8.29087 6.18415 8.44984 6.06694 8.56705C5.94973 8.68426 5.79076 8.75011 5.625 8.75011H1.875C1.70924 8.75011 1.55027 8.68426 1.43306 8.56705C1.31585 8.44984 1.25 8.29087 1.25 8.12511V4.37511C1.25 4.20935 1.31585 4.05038 1.43306 3.93317C1.55027 3.81596 1.70924 3.75011 1.875 3.75011C2.04076 3.75011 2.19973 3.81596 2.31694 3.93317C2.43415 4.05038 2.5 4.20935 2.5 4.37511V6.70324L4.70703 4.68761C5.75702 3.64171 7.09333 2.93032 8.54729 2.64326C10.0012 2.3562 11.5077 2.50633 12.8764 3.07471C14.2451 3.64309 15.4147 4.60422 16.2376 5.83679C17.0605 7.06935 17.4998 8.51809 17.5 10.0001Z"
              fill="#6F6D55"
            />
          </svg>
        </button>
        <button
          id=""
          type="reset"
          class="flex gap-[6px] rounded-full bg-green-4 text-green-1 px-5 py-[10px] whitespace-nowrap"
        >
          抽取
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.3131 6.875C14.9487 6.8746 14.5901 6.96566 14.2701 7.13984C14.1744 6.84357 14.0166 6.57113 13.8071 6.34075C13.5977 6.11036 13.3415 5.92734 13.0557 5.80391C12.7698 5.68048 12.461 5.61949 12.1497 5.62501C11.8384 5.63053 11.5318 5.70244 11.2506 5.83594V3.4375C11.2506 2.85734 11.0201 2.30094 10.6099 1.8907C10.1996 1.48047 9.64322 1.25 9.06306 1.25C8.4829 1.25 7.9265 1.48047 7.51626 1.8907C7.10603 2.30094 6.87556 2.85734 6.87556 3.4375V9.6875L6.57712 9.20859C6.43282 8.96006 6.24098 8.74238 6.01255 8.56798C5.78412 8.39358 5.52358 8.26588 5.24581 8.19218C4.68481 8.04332 4.08766 8.12342 3.58571 8.41484C3.08377 8.70627 2.71815 9.18516 2.5693 9.74616C2.42044 10.3072 2.50054 10.9043 2.79196 11.4062L3.15681 12.0492C5.84509 16.7883 6.95759 18.75 10.6256 18.75C12.4483 18.7479 14.1958 18.0229 15.4846 16.7341C16.7735 15.4452 17.4985 13.6977 17.5006 11.875V9.0625C17.5006 8.48234 17.2701 7.92594 16.8599 7.5157C16.4496 7.10547 15.8932 6.875 15.3131 6.875ZM16.2506 11.875C16.2489 13.3663 15.6557 14.7961 14.6012 15.8506C13.5467 16.9052 12.1169 17.4983 10.6256 17.5C7.68571 17.5 6.88806 16.0938 4.24431 11.4313L3.8779 10.7852V10.7812C3.75349 10.5661 3.71957 10.3105 3.78359 10.0704C3.8476 9.83026 4.00432 9.62539 4.21931 9.50078C4.36171 9.41829 4.52349 9.37515 4.68806 9.37578C4.85286 9.37554 5.01481 9.41874 5.15759 9.50104C5.30037 9.58333 5.41894 9.70181 5.50134 9.84453C5.50452 9.85079 5.50818 9.8568 5.51228 9.8625L6.97087 12.2063C7.04286 12.3212 7.15027 12.4096 7.27691 12.4581C7.40355 12.5066 7.54254 12.5127 7.6729 12.4753C7.80326 12.4379 7.91792 12.3591 7.99958 12.2508C8.08123 12.1425 8.12545 12.0106 8.12556 11.875V3.4375C8.12556 3.18886 8.22433 2.9504 8.40014 2.77459C8.57596 2.59877 8.81442 2.5 9.06306 2.5C9.3117 2.5 9.55015 2.59877 9.72597 2.77459C9.90179 2.9504 10.0006 3.18886 10.0006 3.4375V8.75C10.0006 8.91576 10.0664 9.07473 10.1836 9.19194C10.3008 9.30915 10.4598 9.375 10.6256 9.375C10.7913 9.375 10.9503 9.30915 11.0675 9.19194C11.1847 9.07473 11.2506 8.91576 11.2506 8.75V7.8125C11.2506 7.56386 11.3493 7.3254 11.5251 7.14959C11.701 6.97377 11.9394 6.875 12.1881 6.875C12.4367 6.875 12.6752 6.97377 12.851 7.14959C13.0268 7.3254 13.1256 7.56386 13.1256 7.8125V9.375C13.1256 9.54076 13.1914 9.69973 13.3086 9.81694C13.4258 9.93415 13.5848 10 13.7506 10C13.9163 10 14.0753 9.93415 14.1925 9.81694C14.3097 9.69973 14.3756 9.54076 14.3756 9.375V9.0625C14.3756 8.81386 14.4743 8.5754 14.6501 8.39959C14.826 8.22377 15.0644 8.125 15.3131 8.125C15.5617 8.125 15.8002 8.22377 15.976 8.39959C16.1518 8.5754 16.2506 8.81386 16.2506 9.0625V11.875Z"
              fill="#EBE5BA"
            />
          </svg>
        </button>
      </div>
    </div>

    <div class="flex flex-col items-center mt-[22px] mb-[58px]">
      <div class="">
        <h2 class="text-4 font-bold text-brown-1 absolute pt-[2px] pl-[2px]">不知道要吃什麼？</h2>
        <h2 class="text-4 font-bold text-orange-1 relative">不知道要吃什麼？</h2>
      </div>
      <div class="pl-[50px]">
        <h2 class="text-4 font-bold text-brown-1 absolute pt-[2px] pl-[2px]">讓食享替你想想</h2>
        <h2 class="text-4 font-bold text-orange-1 relative">讓食享替你想想</h2>
      </div>
      <img src="/src/assets/images/WhatToEatToday/thinking.png" alt="thinking" class="w-[219px]" />
    </div>
  </div>
</template>

<style scoped>
body {
  font-family: 'Noto Sans TC', sans-serif;
  font-weight: medium;
  font-size: 16px;
  line-height: 20px;
}
.text-4 {
  font-size: 24px;
  line-height: 34.75px;
}
.custom-select {
  -webkit-appearance: none; /* 隱藏預設箭頭 */
  -moz-appearance: none; /* 隱藏預設箭頭 */
  appearance: none; /* 隱藏預設箭頭 */
  background: url('/src\assets\images\WhatToEatToday\vector.svg') no-repeat; /* 使用自定義箭頭圖標 */
  background-size: 8px; /* 調整箭頭圖標大小 */
  background-position: right 16px center;
}

.w-flex-1056 {
  width: 1056px;
  flex: 1 1 1056px;
}
.w-flex-96 {
  width: 96px;
  flex: 1 1 96px;
}
</style>
