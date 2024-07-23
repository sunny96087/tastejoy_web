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
    <div class="w-[336px] border border-green-4 p-1 gap-2 flex rounded-full overflow-hidden">
      <router-link
        to="/randomfood"
        class="text-green-4 hover:text-white-1 hover:bg-green-4 rounded-full text-center cursor-pointer px-3 py-[6px]"
        :class="{ 'bg-green-4 text-white-1': $route.path === '/randomfood' }"
        >隨機抽美食</router-link
      >

      <router-link
        to="/publicfood"
        class="text-green-4 hover:text-white-1 hover:bg-green-4 rounded-full text-center cursor-pointer px-3 py-[6px]"
        :class="{ 'bg-green-4 text-white-1': $route.path === '/publicfood' }"
        >抽公開美食</router-link
      >
      <router-link
        to="/randomcategory"
        class="text-green-4 hover:text-white-1 hover:bg-green-4 rounded-full text-center cursor-pointer px-3 py-[6px]"
        :class="{ 'bg-green-4 text-white-1': $route.path === '/randomcategory' }"
        >隨機抽類別</router-link
      >
    </div>
    <div class="border border-green-2 p-5 grid gap-4 tab-content mt-4">
      <div>
        <p class="text-zinc-700">想吃的類別</p>
      </div>
      <div class="grid gap-2">
        <p class="text-zinc-700">想抽幾個</p>
        <label for="" class="text-zinc-700 sr-only">想抽幾個</label>
        <select
          id=""
          name=""
          class="rounded-full border border-green-4 py-[10px] px-3 text-zinc-700 focus:ring-1 focus:ring-inset focus:ring-green-4 custom-select sm:text-sm"
        >
          <option>一個</option>
          <option>兩個</option>
          <option>三個</option>
          <option>四個</option>
          <option>五個</option>
          <option>六個</option>
        </select>
      </div>
      <div class="grid gap-2">
        <p class="text-zinc-700">地區</p>
        <select
          id=""
          name=""
          class="rounded-full border border-green-4 py-[10px] px-3 text-zinc-700 focus:ring-1 focus:ring-inset focus:ring-green-4 custom-select"
        >
          <option value="全部地區">全部地區</option>
          <option v-for="(country, id) in countries" :key="id" :value="country">
            {{ country }}
          </option>
        </select>
      </div>
      <div class="flex flex-col items-center">
        <div class="">
          <h2 class="text-4 font-bold text-brown-1 absolute pt-[2px] pl-[2px]">不知道要吃什麼？</h2>
          <h2 class="text-4 font-bold text-orange-1 relative">不知道要吃什麼？</h2>
        </div>
        <div class="pl-[50px]">
          <h2 class="text-4 font-bold text-brown-1 absolute pt-[2px] pl-[2px]">讓食享替你想想</h2>
          <h2 class="text-4 font-bold text-orange-1 relative">讓食享替你想想</h2>
        </div>
        <img
          src="/src/assets/images/WhatToEatToday/thinking.png"
          alt="thinking"
          class="w-[219px]"
        />
      </div>
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
</style>
