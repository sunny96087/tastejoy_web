<script setup>

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

</script>

<template>
    <div class="w-full bg-custom-color text-[#BDB890] rounded-lg shadow-lg overflow-auto">
        <table class="w-full border-collapse text-center text-sm">
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
    </div>    
</template>

<style scoped>
</style>
