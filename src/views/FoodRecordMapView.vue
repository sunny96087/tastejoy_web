<script setup>

import { ref,watch,computed,onMounted,onBeforeUnmount } from 'vue'
import { useCountryStore } from '../stores/country.js'
import { useFoodRecordStore } from '../stores/foodRecord.js';
import { RouterLink,useRoute } from 'vue-router';
import addRecord from './FoodRecordAdd.vue'
import infoRecord from './FoodRecordInfo.vue'
import mapTool from './FoodMapView.vue'

  // 判斷是否紀錄為地圖模式
  const route = useRoute();
  const isListView = ref(false);
  const isMapView = ref(false);

  const updateView = () => {
    isListView.value = route.path === '/record';
    isMapView.value = route.path === '/graph';
  };

  onMounted(()=>{
    updateView();
  });

  //取得縣市資料
  const countries = ref([]);
  countries.value = useCountryStore().cities;

  //取得鄉鎮市區資料
  const selectedCountry = ref('全部地區');
  const selectedTown = ref('全部地區');
  const towns = ref([]);
  watch(selectedCountry, (newVal) => {
    selectedTown.value = '全部地區';
    towns.value = useCountryStore().towns(newVal);
    });

  // 新增按鈕
  const isShowAddRecord = ref(false)
  const showAddRecord = ()=> {
    isShowAddRecord.value = true
  }

  // 紀錄詳細按鈕
  const isShowInfoRecord = ref(false)
  const showInfoRecord = ()=> {
    isShowInfoRecord.value = true
  }

  // 取得美食紀錄資料 TODO:TOKEN API
  const token = ref('')
  const records = useFoodRecordStore().getFoodRecords(token)

</script>

<template>
  <!-- 新增紀錄視窗 -->
  <addRecord v-show="isShowAddRecord" @closeAddModal="isShowAddRecord = false"/>
  <!-- 詳細紀錄視窗 -->
  <infoRecord v-show="isShowInfoRecord" @closeInfoModal="isShowInfoRecord = false"/>

  <div class="max-w-7xl mx-auto my-0 bg-custom-color relative">
    <header class="w-11/12 mx-auto mb-4 pt-4 relative md:flex justify-around">
      <div class="w-36 p-1 mb-2 border-2 border-[#a49d7d] rounded-full overflow-auto md:w-auto md:mb-0 flex items-center">
        <RouterLink to="/record" 
        :class="['cursor-pointer px-4 py-2 text-custom-switch-color border-b-0 border-gray-400 rounded-full', { 'bg-[#6b6142] text-white': isListView }]"
        >
          列表
        </RouterLink>
          
        <RouterLink to="/graph" 
        :class="['cursor-pointer px-4 py-2 text-custom-switch-color border-b-0 border-gray-400 rounded-full', { 'bg-[#6b6142] text-white': isMapView }]"
        >
          地圖
        </RouterLink>
      </div>

      <div class="w-full mb-2 p-1 border-2 border-[#a49d7d] rounded-full flex justify-between md:w-1/2 md:mb-0">
        <input class="p-2 ml-2 text-[#a49d7d] border-0 border-[#FFFDF6] bg-[#FFFDF6]" type="text" placeholder="搜尋美食記錄">
        <button class="p-2 bg-[#FFFDF6] rounded-full border-0 cursor-pointer">
          <img src="../assets/images/FoodRecordList/search.png" alt="search-icon" style="width:20px; height:20px;">
        </button>
      </div>
      <div  class="w-full flex justify-end md:w-1/6">
        <button @click="showAddRecord" class="w-1/6 p-2 text-[#a49d7d] cursor-pointer border-2 border-[#a49d7d] rounded-full bg-[#6F6D55] md:w-full">新增</button>
      </div>
    
    </header>
    <main class="h- w-10/12 mx-auto text-[#6F6D55] border-2 border-[#a49d7d] rounded-xl">
      <mapTool/>
      
    </main>
  </div>
</template>

<style scoped>

</style>
