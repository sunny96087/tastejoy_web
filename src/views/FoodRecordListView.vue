<script setup>

import { ref,watch,computed,onMounted,onBeforeUnmount } from 'vue';
import { useCountryStore } from '../stores/country.js';

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

  onMounted(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('resize', checkScreenSize);
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

  // 取得美食紀錄資料 TODO:API
  let isNoData = false;
  const records = ref(
    [
      {
        name: '海底撈',
        tag: '火鍋',
        place: '高雄巨蛋',
        businessTime: '10:00-24:00',
        phone: '07-123456',
        score:'4/5',
      },
      {
        name: '王品',
        tag: '排餐',
        place: '高雄駁愛路',
        businessTime: '10:00-24:00',
        phone: '07-987654',
        score:'3/5',
      },
    ]
  );
  if(records.value.length === 0){
    isNoData = true;
  }
</script>

<template>
  <div class="max-w-7xl mx-auto my-0 bg-custom-color">
    <header class="w-11/12 mx-auto mb-4 pt-4 relative md:flex justify-around">
      <div class="w-1/4 p-1 mb-2 border-2 border-[#a49d7d] rounded-full overflow-auto md:w-auto md:mb-0 flex items-center">
        <input type="radio" id="list" name="view" class="hidden peer/list" checked />
        <label for="list" class="cursor-pointer px-4 py-2 text-custom-switch-color peer-checked/list:bg-[#6b6142] peer-checked/list:text-white border-b-0 border-gray-400 rounded-full">
          列表
        </label>
        <input type="radio" id="map" name="view" class="hidden peer/map" />
        <label for="map" class="cursor-pointer px-4 py-2 text-custom-switch-color peer-checked/map:bg-[#6b6142] peer-checked/map:text-white border-b-0 border-gray-400 rounded-full">
          地圖
        </label>
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

      <div v-if=shouldShowMenu class="w-full mb-2 border-2 border-[#a49d7d] rounded-full overflow-hidden p-2 md:w-auto md:mb-0">
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
      <div v-if=shouldShowMenu class="w-full mb-2 p-1 border-2 border-[#a49d7d] rounded-full flex justify-between md:w-1/2 md:mb-0">
        <input class="p-2 ml-2 text-[#a49d7d] border-0 border-[#FFFDF6] bg-[#FFFDF6]" type="text" placeholder="搜尋美食記錄">
        <button class="p-2 bg-[#FFFDF6] rounded-full border-0 cursor-pointer">
          <img src="../assets/images/FoodRecordList/search.png" alt="search-icon" style="width:20px; height:20px;">
        </button>
      </div>
      <div v-if=shouldShowMenu class="w-full flex justify-end md:w-1/6">
        <button class="w-1/6 p-2 text-[#a49d7d] cursor-pointer border-2 border-[#a49d7d] rounded-full bg-[#6F6D55] md:w-full">新增</button>
      </div>
    
    </header>
    <main class="h-screen text-[#6F6D55]">
      <table v-if="!isNoData" class="w-11/12 mx-auto border-collapse">
        <thead>
          <tr class="text-left p-2">
            <th>名稱</th>
            <th>分類</th>
            <th>地點</th>
            <th>營業時間</th>
            <th>電話</th>
            <th>分數</th>
            <th>檢視</th>
            <th>導航</th>
            <th>分享</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(record,index) in records" :key="index"
          class="text-left border-b border-b-[#E4E4E7]">
            <td class="p-3">{{ record.name }}</td>
            <td class="p-3">{{ record.tag }}</td>
            <td class="p-3">{{ record.place }}</td>
            <td class="p-3">{{ record.businessTime }}</td>
            <td class="p-3">{{ record.phone }}</td>
            <td class="p-3">{{ record.score }}</td>
            <td class="p-3"><img src="../assets/images/FoodRecordList/checkButton.png" alt="check-icon" style="width:28px; height:28px;"></td>
            <td class="p-3"><img src="../assets/images/FoodRecordList/NavButton.png" alt="nav-icon" style="width:28px; height:28px;"></td>
            <td class="p-3"><img src="../assets/images/FoodRecordList/ShareButton.png" alt="share-icon" style="width:28px; height:28px;"></td>
          </tr>
        </tbody>
      </table>
      <div v-else class="mt-10 flex justify-center">
        <img src="../assets/images/FoodRecordList/NoData.png" alt="">
      </div>
      
    </main>
  </div>
</template>

<style scoped>

</style>
