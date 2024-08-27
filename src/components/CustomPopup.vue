<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
    infoData:{
        type: Object,
        required: true,
        default: () => ({
            store: '',
            category: '',
            address: '',
            businessHour: '',
            phone: '',
            score: '',
        })
    }
    
});

// 判斷當前銀幕是否為小銀幕(below 768px)
const isSmallScreen = ref(false);
  
const checkScreenSize = () => {
    isSmallScreen.value = window.matchMedia('(max-width: 768px)').matches;
};

onMounted(() => {
    checkScreenSize();
  });

</script>

<template>
    <div class="w-full bg-custom-color text-[#BDB890] rounded-lg shadow-lg overflow-auto">
        <table v-if="!isSmallScreen" class="w-full border-collapse text-center text-sm">
            <thead>
                <tr>
                <th class="border-b px-4 py-2">名稱</th>
                <th class="border-b px-4 py-2">分類</th>
                <th class="border-b px-4 py-2">地點</th>
                <th class="border-b px-4 py-2">營業時間</th>
                <th class="border-b px-4 py-2">電話</th>
                <th class="border-b px-4 py-2">分數</th>
                <th class="border-b px-4 py-2">檢視</th>
                <th class="border-b px-4 py-2">導航</th>
                <th class="border-b px-4 py-2">分享</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td class="border-t px-4 py-2">{{ props.infoData.store }}</td>
                <td class="border-t px-4 py-2">{{ props.infoData.category }}</td>
                <td class="border-t px-4 py-2">{{ props.infoData.address }}</td>
                <td class="border-t px-4 py-2">{{ props.infoData.businessHour }}</td>
                <td class="border-t px-4 py-2">{{ props.infoData.phone }}</td>
                <td class="border-t px-4 py-2">{{ props.infoData.score }}</td>
                <td class="border-t px-4 py-2">
                    <button @click="showInfoRecord(record)">
                        <img src="../assets/images/FoodRecordList/checkButton.png" alt="check-icon" style="width:28px; height:28px;">   
                    </button>    
                </td>
                <td class="border-t px-4 py-2">
                    <button>
                        <img src="../assets/images/FoodRecordList/NavButton.png" alt="nav-icon" style="width:28px; height:28px;">
                    </button>
                </td>
                <td class="border-t px-4 py-2">
                    <button>
                        
                        <img src="../assets/images/FoodRecordList/ShareButton.png" alt="share-icon" style="width:28px; height:28px;">
                    </button>
                </td>
                </tr>
            </tbody>
        </table>

        <!-- 手機版的popup-->
        <div v-show="isSmallScreen" class="w-full rounded-xl">
            <div class="border-b-2">
            <span class="inline-block w-24 text-left px-2 py-4">名稱</span>
            <span class="inline-block px-2 py-4">{{ props.infoData.store }}</span>
            </div>
            <div class="border-b-2">
            <span class="inline-block w-24 text-left px-2 py-4">分類</span>
            <span class="inline-block px-2 py-4">{{ props.infoData.category }}</span>
            </div>
            <div class="border-b-2">
            <span class="inline-block w-24 text-left px-2 py-4">地點</span>
            <span class="inline-block px-2 py-4">{{ props.infoData.address }}</span>
            </div>
            <div class="border-b-2">
            <span class="inline-block w-24 text-left px-2 py-4">營業時間</span>
            <span class="inline-block px-2 py-4">{{ props.infoData.businessHour }}</span>
            </div>
            <div class="flex justify-end mt-2">
            <button class="mr-4" @click="showInfoRecord">
                <img src="../assets/images/FoodRecordList/checkButton.png" alt="check-icon" style="width:35px; height:35px;">   
            </button>
            <router-link to="/" class="mr-4">
                <img src="../assets/images/FoodRecordList/NavButton.png" alt="nav-icon" style="width:35px; height:35px;">
            </router-link>
            <router-link to="/">
                <img src="../assets/images/FoodRecordList/ShareButton.png" alt="share-icon" style="width:35px; height:35px;">
            </router-link>
            </div>

      </div>
    </div>    
</template>

<style scoped>
</style>
