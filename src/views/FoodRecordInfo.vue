<script setup>
  import { ref } from 'vue'
  
  // 按下關閉按鈕回傳選單關閉給父組件
  const emit = defineEmits(["closeInfoModal"])

  const closeInfoModal = () => {
    emit("closeInfoModal")
  }

  // TODO需拿資料
  const formData = ref({
    image:'',
    store: '海底撈',
    phone: '07-111111',
    foodName: '牛肉',
    description: '好好吃',
    date: '2024-07-17',
    category: '火鍋',
    score: '',
    thoughts: 'yummy',
    note: 'yummy',
    businessHour:'0900~2400',
    storeNote:'yummy',
    country:'',
    address:'高雄博愛路',
    location:'1777號',
    isPublic:'',
  })

</script>

<template>
  <div class="fixed top-0 inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
    <div class="w-full max-w-lg fixed top-10 bottom-10 z-100 bg-custom-color p-4 rounded-2xl overflow-hidden">
      <div class="h-full overflow-y-auto">
        <div class="flex justify-between items-center">
        <h2 class="text-xl font-semibold mb-4 text-black">檢視紀錄</h2>
        <button @click="closeInfoModal">
          <img src="../assets/images/NavBar/close.png" alt="close" style="width:20px; height:20px">
        </button>
        </div>

        <div class="mb-2">
          <img src="../assets/images/FoodRecordList/image upload Group.png" alt="food pic">
        </div>

        <form>
          <div class="mb-4">
            <label class="text-gray-700">店家</label>
            <input v-model="formData.store" disabled type="text" class="w-full mt-1 px-3 py-2 border rounded-2xl text-[#3F3F46]" />
          </div>

          <div class="mb-4">
            <label class="text-gray-700">電話</label>
            <input v-model="formData.phone" disabled type="text" class="w-full mt-1 px-3 py-2 border rounded-2xl text-[#3F3F46]" />
          </div>

          <div class="mb-4">
            <label class="text-gray-700">食物名稱</label>
            <input v-model="formData.foodName" disabled type="text" class="w-full mt-1 px-3 py-2 border rounded-2xl text-[#3F3F46]" />
          </div>

          <div class="mb-4">
            <label class="block text-gray-700">說明</label>
            <input v-model="formData.description" disabled type="text" class="w-full mt-1 px-3 py-2 border rounded-2xl text-[#3F3F46]" />
          </div>

          <div class="mb-4">
            <label class="text-gray-700">日期</label>
            <input v-model="formData.date" disabled type="text" class="w-full mt-1 px-3 py-2 border rounded-2xl text-[#3F3F46]" />
          </div>

          <div class="mb-4">
            <label class="text-gray-700">分類</label>
            <input v-model="formData.category" disabled type="text" class="w-full mt-1 px-3 py-2 border rounded-2xl text-[#3F3F46]" />
          </div>

          <div class="mb-4">
            <label class="block text-gray-700">分數</label>
            <img src="../assets/images/FoodRecordList/star.png" alt="">
          </div>

          <div class="mb-4">
            <label class="block text-gray-700">感想</label>
            <input v-model="formData.thoughts" disabled type="text" class="w-full mt-1 px-3 py-2 border rounded-2xl text-[#3F3F46]" />
          </div>

          <div class="mb-4">
            <label class="block text-gray-700">備註</label>
            <input v-model="formData.note" disabled type="text" class="w-full mt-1 px-3 py-2 border rounded-2xl text-[#3F3F46]" />
          </div>

          <div class="mb-4">
            <label class="text-gray-700">營業時間</label>
            <input v-model="formData.businessHour" disabled type="text" class="w-full mt-1 px-3 py-2 border rounded-2xl text-[#3F3F46]" />
          </div>

          <div class="mb-4">
            <label class="block text-gray-700">店家備註</label>
            <input v-model="formData.storeNote" disabled type="text" class="w-full mt-1 px-3 py-2 border rounded-2xl text-[#3F3F46]" />
          </div>

          <div class="mb-4">
            <label class="text-gray-700">縣市</label>
            <input v-model="formData.country" disabled type="text" class="w-full mt-1 px-3 py-2 border rounded-2xl text-[#3F3F46]" />
          </div>

          <div class="mb-4">
            <label class="block text-gray-700">地址</label>
            <input v-model="formData.address" disabled type="text" class="w-full mt-1 px-3 py-2 border rounded-2xl text-[#3F3F46]" />
          </div>

          <div class="mb-4">
            <label class="text-gray-700">經緯</label>
            <input v-model="formData.location" disabled type="text" class="w-full mt-1 px-3 py-2 border rounded-2xl text-[#3F3F46]" />
          </div>

          <div class="mb-4">
            <label class="text-gray-700">是否公開</label>
            <span class="text-red-500">*</span>
            <div class="flex items-center mt-2 text-[#BDB890]">
              <input v-model="formData.isPublic" type="radio" id="public" value="public" class="mr-2">
              <label for="public" class="mr-4">公開</label>
              <input v-model="formData.isPublic" type="radio" id="private" value="private" class="mr-2">
              <label for="private">私密</label>
            </div>
          </div>

          <div class="flex justify-end">
            <button class="w-1/5 px-4 py-2 mr-2 border rounded-2xl text-[#6F6D55] flex justify-center items-center hover:bg-[#6F6D55]">
              刪除
              <img src="../assets/images/FoodRecordList/info_del.png" alt="">
            </button>
            <button class="w-1/5 px-4 py-2 mr-2 border rounded-2xl text-[#6F6D55] flex justify-center items-center hover:bg-[#6F6D55]">
              編輯
              <img src="../assets/images/FoodRecordList/info_edit.png" alt="">
            </button>
            <button class="w-1/5 px-4 py-2 mr-2 border rounded-2xl text-[#6F6D55] flex justify-center items-center hover:bg-[#6F6D55]">
              分享    
              <img src="../assets/images/FoodRecordList/info_share.png" alt="">
            </button>
            <button type="cancel" class="w-1/5 px-4 py-2 mr-2 border rounded-2xl text-[#6F6D55] flex justify-center items-center hover:bg-[#6F6D55]">
              導航
              <img src="../assets/images/FoodRecordList/info_nav.png" alt="">
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>      
</template>

<style scoped>
</style>
