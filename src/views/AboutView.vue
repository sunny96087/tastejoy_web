<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import { ref, computed } from 'vue';

const validationSchema = yup.object({
  name: yup.string().required('名稱是必填項目'),
  email: yup.string().email('請輸入有效的電子郵件地址').required('信箱是必填項目'),
  message: yup.string().required('內容是必填項目')
});

const formValues = ref({
  name: '',
  phone: '',
  email: '',
  message: '',
  source: ''
});

const isFormValid = computed(() => {
  return formValues.value.name && formValues.value.email && formValues.value.message;
});

const onSubmit = (values) => {
  console.log(values);
  alert('表單已提交');
};
</script>


<template>
  <div class="relative h-screen overflow-x-hidden">
    <div class="absolute inset-0">
      <div class="w-[1280px] h-[360px] absolute inset-0 mx-auto">
        <img 
          src="../assets/images/pic.jpg"
          alt="背景圖"
          class="w-full h-full object-cover filter opacity-8"
        >
      </div>
      <div class="w-[1280px] h-[360px] absolute inset-0 bg-black opacity-35"></div>
    </div>
    <div class="absolute left-10 top-24 text-green1 space-y-4">
      <h1 class="text-[28px] font-semibold">加入食享</h1>
      <h2 class="text-xl font-semibold min-w-[500px]">一起來探索你的美食足跡，發現世界各地的美味佳餚</h2>
      <h3 class="text-xl font-medium w-4/6 min-w-[420px]">
        食享 (TasteJoy) 是一款專為美食愛好者設計的網站，
        讓您可以在全球範圍內探索、發現並記錄各種美食的足跡。
        無論您身處何地，我們都將帶您走進本地的美食天堂。
      </h3>
    </div>
  </div>

  <div class="absolute left-1/2 transform -translate-x-1/2 top-[500px] text-center w-full">
    <h3 class="text-xl font-semibold text-green4 mt-4 mb-1">功能介紹</h3>
    <div class="flex justify-center space-x-6">
      <div class="w-1/5 aspect-w-1 aspect-h-1 max-w-[220px] max-h-[220px]">
        <a href="#records">
          <img src="../assets/images/pic.jpg" alt="功能圖片1" class="w-full h-full object-cover rounded-lg cursor-pointer">
          <p class="text-xs text-green4 font-medium mt-2">紀錄自己的美食地圖</p>
        </a>
      </div>
      <div class="w-1/5 aspect-w-1 aspect-h-1 max-w-[220px]">
        <a href="#categories">
          <img src="../assets/images/pic.jpg" alt="功能圖片2" class="w-full h-full object-cover rounded-lg cursor-pointer">
          <p class="text-xs text-green4 font-medium mt-2">自訂美食分類</p>
        </a>
      </div>
      <div class="w-1/5 aspect-w-1 aspect-h-1 max-w-[220px]">
        <a href="#randomSelected">
          <img src="../assets/images/pic.jpg" alt="功能圖片3" class="w-full h-full object-cover rounded-lg cursor-pointer">
          <p class="text-xs text-green4 font-medium mt-2">隨機選美食</p>
        </a>
      </div>
      <div class="w-1/5 aspect-w-1 aspect-h-1 max-w-[220px]">
        <a href="#articlesSharing">
          <img src="../assets/images/pic.jpg" alt="功能圖片4" class="w-full h-full object-cover rounded-lg cursor-pointer">
          <p class="text-xs text-green4 font-medium mt-2">美食文章分享</p>
        </a>
      </div>
      <div class="w-1/5 aspect-w-1 aspect-h-1 max-w-[220px]">
        <a href="#shareWithFriends">
          <img src="../assets/images/pic.jpg" alt="功能圖片5" class="w-full h-full object-cover rounded-lg cursor-pointer">
          <p class="text-xs text-green4 font-medium mt-2">和朋友分享美食紀錄</p>
        </a>
      </div>
    </div>
  </div>

  <div class="absolute left-1/2 transform -translate-x-1/2 top-[850px] w-full">
    <div class="flex flex-col items-center space-y-4">
      <div class="relative w-full max-w-[1200px] h-[450px] bg-[url('../assets/images/pic.jpg')] bg-cover mx-auto rounded-2xl">
        <div class="absolute left-[40px] top-1/2 transform -translate-y-1/2 w-[40%] h-[30%] bg-[#FFFDF6] bg-opacity-75 p-10 flex flex-col justify-center rounded-3xl min-w-[400px]">
          <h3 class="text-[28px] font-semibold text-green4">紀錄自己的美食地圖</h3>
          <p class="text-[16px] decoration-dotted text-green4">• 紀錄您的每一次用餐體驗，創建個人美食日誌。</p>
          <p class="text-[16px] text-green4">• 上傳照片和評論，分享您的美食心得。</p>
        </div>
      </div>
      <div class="relative w-full max-w-[1200px] h-[450px] bg-[url('../assets/images/pic.jpg')] bg-cover mx-auto rounded-2xl">
        <div class="absolute right-[40px] top-1/2 transform -translate-y-1/2 w-[40%] h-[30%] bg-[#FFFDF6] bg-opacity-75 p-10 flex flex-col justify-center rounded-3xl min-w-[400px]">
          <h3 class="text-[28px] font-semibold text-green4">自訂美食分類</h3>
          <p class="text-[16px] text-green4">• 設定和管理您喜愛的食物類別，獲取個性化推薦。</p>
          <p class="text-[16px] text-green4">• 根據不同類別探索各地美食。</p>
        </div>
      </div>
      <div class="relative w-full max-w-[1200px] h-[450px] bg-[url('../assets/images/pic.jpg')] bg-cover mx-auto rounded-2xl">
        <div class="absolute left-[40px] top-1/2 transform -translate-y-1/2 w-[40%] h-[30%] bg-[#FFFDF6] bg-opacity-75 p-10 flex flex-col justify-center rounded-3xl min-w-[400px]">
          <h3 class="text-[28px] font-semibold text-green4">隨機選美食</h3>
          <p class="text-[16px] text-green4">• 提供隨機美食推薦，讓您每次都能發現新的驚喜。</p>
          <p class="text-[16px] text-green4">• 根據您的當前位置推薦附近的餐廳。</p>
        </div>
      </div>
      <div class="relative w-full max-w-[1200px] h-[450px] bg-[url('../assets/images/pic.jpg')] bg-cover mx-auto rounded-2xl">
        <div class="absolute right-[40px] top-1/2 transform -translate-y-1/2 w-[40%] h-[30%] bg-[#FFFDF6] bg-opacity-75 p-10 flex flex-col justify-center rounded-3xl min-w-[400px]">
          <h3 class="text-[28px] font-semibold text-green4">美食文章分享</h3>
          <p class="text-[16px] text-green4">• 瀏覽和分享美食文章，獲取最新的美食資訊和食譜。</p>
          <p class="text-[16px] text-green4">• 參與討論，與其他美食愛好者互動。</p>
        </div>
      </div>
      <div class="relative w-full max-w-[1200px] h-[450px] bg-[url('../assets/images/pic.jpg')] bg-cover mx-auto rounded-2xl">
        <div class="absolute left-[40px] top-1/2 transform -translate-y-1/2 w-[40%] h-[30%] bg-[#FFFDF6] bg-opacity-75 p-10 flex flex-col justify-center rounded-3xl min-w-[400px]">
          <h3 class="text-[28px] font-semibold text-green4">和朋友分享美食紀錄</h3>
          <p class="text-[16px] text-green4">• 將紀錄分享給好友，享受互相分享美食的喜悅。</p>
          <p class="text-[16px] text-green4">• 接收好友的分享，並添加到自己的美食地圖吧。</p>
        </div>
      </div>
    </div>
  </div>

  <div class="absolute left-1/2 transform -translate-x-1/2 top-[3180px] w-full">
    <h3 class="text-xl font-semibold text-green4 mt-4 mb-4 text-center">聯絡我們</h3>
    <div class="absolute left-1/2 transform -translate-x-1/2 w-1/2 h-auto max-w-2xl min-w-[430px]  border-2 border-green2 rounded-2xl p-5 space-y-4">
      <Form :validation-schema="validationSchema" @submit="onSubmit" v-slot="{ validate }" class="space-y-4">
        <div>
          <label class="block text-[16px] text-green4" for="name">
            名稱<span class="text-red-500">*</span>
          </label>
          <Field name="name" v-model="formValues.name" as="input" class="w-full border border-green4 rounded-full p-2.5 text-green4 placeholder-zinc-400" type="text" id="name" placeholder="請輸入您的名稱" />
          <ErrorMessage name="name" class="text-red-500 text-sm" />
        </div>
        <div>
          <label class="block text-[16px] text-green4" for="phone">
            電話
          </label>
          <Field name="phone" v-model="formValues.phone" as="input" class="w-full border border-green4 rounded-full p-2.5 text-green4 placeholder-zinc-400" type="text" id="phone" placeholder="請輸入您的電話" />
        </div>
        <div>
          <label class="block text-[16px] text-green4" for="email">
            信箱<span class="text-red-500">*</span>
          </label>
          <Field name="email" v-model="formValues.email" as="input" class="w-full border border-green4 rounded-full p-2.5 text-green4 placeholder-zinc-400" type="email" id="email" placeholder="請輸入您的信箱" />
          <ErrorMessage name="email" class="text-red-500 text-sm" />
        </div>
        <div>
          <label class="block text-[16px] text-green4" for="message">
            內容<span class="text-red-500">*</span>
          </label>
          <Field name="message" v-model="formValues.message" as="textarea" class="w-full border border-green4 rounded-[20px] p-2.5 text-green4 placeholder-zinc-400" id="message" placeholder="請輸入您的訊息" rows="3" />
          <ErrorMessage name="message" class="text-red-500 text-sm" />
        </div>
        <div>
          <label class="block text-[16px] text-green4">
            從哪裡得知本網站
          </label>
          <div class="flex flex-wrap gap-5">
            <label class="flex items-center space-x-2 text-green4">
              <Field name="source" v-model="formValues.source" as="input" type="radio" value="網路社群" class="form-radio" />
              <span>網路社群</span>
            </label>
            <label class="flex items-center space-x-2 text-green4">
              <Field name="source" v-model="formValues.source" as="input" type="radio" value="親友推薦" class="form-radio" />
              <span>親友推薦</span>
            </label>
            <label class="flex items-center space-x-2 text-green4">
              <Field name="source" v-model="formValues.source" as="input" type="radio" value="社群媒體" class="form-radio" />
              <span>社群媒體</span>
            </label>
            <label class="flex items-center space-x-2 text-green4">
              <Field name="source" v-model="formValues.source" as="input" type="radio" value="其他" class="form-radio" />
              <span>其他</span>
            </label>
          </div>
        </div>
        <div class="flex justify-end">
          <button :disabled="!isFormValid" @click="validate" type="submit" class="ml-auto bg-green4 text-green1 rounded-full mt- 4 px-10 py-2" :class="{ 'opacity-100': isFormValid, 'opacity-50': !isFormValid }">送出</button>
        </div>
      </Form>
    </div>
  </div>
  
  
</template>

<style scoped>
html, body {
  overflow-x: hidden;
}
.form-radio {
  margin-right: 0.5rem;
}
input {
  accent-color: #6F6D55;
}
</style>
