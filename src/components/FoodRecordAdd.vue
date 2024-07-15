<script setup>
  import { ref } from 'vue'

  // 控制新增選單是否展開
  const showModal = ref(true)

  const closeModal = () =>{
    showModal.value = false
  }

  const formData = ref({
    store: '',
    phone: '',
    foodName: '',
    description: '',
    image:'',
    date: Date.now(),
    category: '',
    score: '',
    thoughts: '',
    note: '',
    businessHour:'',
    storeNote:'',
    country:'',
    address:'',
    location:'',
    isPublic:'',
  })

</script>

<template>
  <div v-if="showModal" class="fixed top-0 inset-0 flex justify-center items-center bg-black bg-opacity-50">
    <div class="w-full max-w-lg bg-white p-4 rounded-2xl">
      <div class="flex justify-between items-center">
        <h2 class="text-xl font-semibold mb-4 text-black">新增紀錄</h2>
        <button @click="closeModal">
          <img src="../assets/images/NavBar/close.png" alt="close" style="width:20px; height:20px">
        </button>
      </div>

      <form>
        <div class="mb-4">
          <label class="block text-gray-700">店家</label>
          <input v-model="formData.store" type="text" class="w-full mt-1 px-3 py-2 border rounded-2xl text-[#BDB890] focus:outline-none focus:ring focus:border-blue-100" />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">電話</label>
          <input v-model="formData.phone" type="text" class="w-full mt-1 px-3 py-2 border rounded-2xl text-[#BDB890] focus:outline-none focus:ring focus:border-blue-300" />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">食物名稱</label>
          <input v-model="formData.foodName" type="text" class="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">說明</label>
          <textarea v-model="formData.description" class="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"></textarea>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">圖片</label>
          <input type="file" @change="handleFileUpload" class="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">日期</label>
          <input v-model="formData.date" type="date" class="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">分類</label>
          <select v-model="formData.category" class="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300">
            <option value="分類1">分類1</option>
            <option value="分類2">分類2</option>
          </select>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">分數</label>
          <input v-model="formData.score" type="number" class="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" />
        </div>
        <div class="flex justify-end">
          <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">提交</button>
        </div>
      </form>
    </div>
  </div>      
</template>

<style scoped>
</style>
