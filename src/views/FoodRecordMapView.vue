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

  // 是否要顯示功能表
  const isMenuOpen = ref(false);
   // 判斷當前銀幕是否為小銀幕(below 768px)
  const isSmallScreen = ref(false);
  // 小銀幕中是否展開功能列表
  // 預設是不展開
  const isMobileMenuOpen = ref(false);
  
  const checkScreenSize = () => {
    isSmallScreen.value = window.matchMedia('(max-width: 768px)').matches;
    if (!isSmallScreen.value) {
      isMenuOpen.value = true; // 當螢幕尺寸大於768px時，自動顯示選單
    }
  };

  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
    // 按下按鈕會toggle狀態
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
  };

  const shouldShowMenu = computed(() => {
    return isMenuOpen.value || !isSmallScreen.value;
  });

  onMounted(()=>{
    checkScreenSize();
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
    <header class="w-11/12 mx-auto mb-4 pt-4 relative md:flex justify-between">
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

      <!-- 手機版收合展開功能按鈕 -->
      <div class="absolute top-7 right-0 md:hidden">
        <div v-if="isMobileMenuOpen" class="flex justify-center">
          <span class="font-light text-[#BDB890] text-right mr-4">收合</span>
          <button @click="toggleMenu">
            <img src="../assets/images/FoodRecordList/downArrow.png" alt="open" style="width:20px;height:20px;">
          </button>
        </div>
        
        <div v-else class="flex justify-center">
          <span class="font-light text-[#BDB890] text-right mr-4">更多功能</span>
          <button @click="toggleMenu">
            <img src="../assets/images/FoodRecordList/rightArrow.png" alt="close" style="width:30px;height:30px;">
          </button>
        </div>
      </div>

      <div v-if="shouldShowMenu" class="mb-2 md:block w-3/5 md:mb-0 p-1 border-2 border-[#a49d7d] rounded-full flex justify-between">
        <input class="p-2 ml-2 text-[#a49d7d] border-0 border-[#FFFDF6] bg-[#FFFDF6]" type="text" placeholder="搜尋美食記錄">
        <button class="p-2 bg-[#FFFDF6] rounded-full border-0 cursor-pointer">
          <img src="../assets/images/FoodRecordList/search.png" alt="search-icon" style="width:20px; height:20px;">
        </button>
      </div>

      <div v-if=shouldShowMenu class="w-full mb-2 border-2 border-[#a49d7d] rounded-full overflow-hidden p-2 md:hidden">
        <select class="border-0 text-[#a49d7d] bg-[#FFFDF6] md: block" v-model="selectedCountry">  
          <option value="全部地區">全部地區</option>
          <option v-for="(country,id) in countries" :key="id" :value="country">
            {{ country }}
          </option>
        </select>
        <select class="border-0 text-[#a49d7d] bg-[#FFFDF6] md: block" v-model="selectedTown">
          <option value="全部地區">全部地區</option>
          <option v-for="(town,id) in towns" :key="id" :value="town">
            {{ town }}
          </option>
        </select>
      </div>

      <div  v-if="shouldShowMenu" class="md:block w-full flex justify-end md:w-1/6">
        <button @click="showAddRecord" class="w-1/6 p-2 text-[#a49d7d] cursor-pointer border-2 border-[#a49d7d] rounded-full bg-[#6F6D55] md:w-full">新增</button>
      </div>
    
    </header>
    <main class="h- w-11/12 mx-auto text-[#6F6D55] border-2 border-[#a49d7d] rounded-xl">
      <!-- 地圖的部分 -->
      <mapTool/>
      
    </main>
  </div>
</template>

<style scoped>

</style>
