<script setup>
  import { ref,onMounted,watch } from 'vue'
  import { useCountryStore } from '../stores/country.js';

  // 控制新增選單是否展開
  const props = defineProps({
    show:{
      type: Boolean,
      default: false,
    },
  })
  console.log('addModal',props.show)

  const emit = defineEmits(["updateAddModal"])

  const showModal = ref(props.show)
  const localShowModal = ref(showModal.value)

  const closeModal = () =>{
    localShowModal.value = false
    emit("updateAddModal",localShowModal.value)

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

  onMounted(() => {
      const today = new Date()
      const year = today.getFullYear()
      const month = String(today.getMonth() + 1).padStart(2, '0')
      const day = String(today.getDate()).padStart(2, '0')
      formData.value.date = `${year}-${month}-${day}`
    })

  //取得縣市資料
  const countries = ref([]);
  countries.value = useCountryStore().cities;

  //取得鄉鎮市區資料
  const selectedCountry = ref('選擇城市');
  const selectedTown = ref('選擇區域');
  const towns = ref([]);
  watch(selectedCountry, (newVal) => {
    selectedTown.value = '選擇區域';
    towns.value = useCountryStore().towns(newVal);
    });  

</script>

<template>
  <div v-if="false" class="fixed top-0 inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
    <div class="w-full max-w-lg h-screen bg-white p-4 rounded-2xl overflow-auto">
      <div class="flex justify-between items-center">
        <h2 class="text-xl font-semibold mb-4 text-black">新增紀錄</h2>
        <button @click="closeModal">
          <img src="../assets/images/NavBar/close.png" alt="close" style="width:20px; height:20px">
        </button>
      </div>

      <form>
        <div class="mb-4">
          <label class="text-gray-700">店家</label>
          <span class="text-red-500">*</span>
          <input v-model="formData.store" type="text" class="w-full mt-1 px-3 py-2 border rounded-2xl text-[#BDB890] focus:outline-none focus:ring focus:border-blue-100" />
        </div>

        <div class="mb-4">
          <label class="text-gray-700">電話</label>
          <span class="text-red-500">*</span>
          <input v-model="formData.phone" type="text" class="w-full mt-1 px-3 py-2 border rounded-2xl text-[#BDB890] focus:outline-none focus:ring focus:border-blue-300" />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700">食物名稱</label>
          <input v-model="formData.foodName" type="text" class="w-full mt-1 px-3 py-2 border rounded-2xl text-[#BDB890] focus:outline-none focus:ring focus:border-blue-300" />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700">說明</label>
          <textarea v-model="formData.description" class="w-full mt-1 px-3 py-2 border rounded-2xl text-[#BDB890] focus:outline-none focus:ring focus:border-blue-300"></textarea>
        </div>

        <div class="mb-4">
          <label class="block text-gray-700">圖片</label>
          <button>
            <img src="../assets/images/FoodRecordList/pic.png" alt="upload pic">
          </button>
        </div>

        <div class="mb-4">
          <label class="text-gray-700">日期</label>
          <span class="text-red-500">*</span>
          <input v-model="formData.date" type="date" class="w-full mt-1 px-3 py-2 border rounded-2xl text-[#BDB890] focus:outline-none focus:ring focus:border-blue-300" />
        </div>

        <div class="mb-4">
          <label class="text-gray-700">分類</label>
          <span class="text-red-500">*</span>
          <div class="w-full flex justify-between">
            <div class="w-3/4 mt-1 mr-1 px-3 py-2 border rounded-2xl"></div>
            <button class="w-1/4 mt-1 px-3 py-2 border rounded-2xl focus:outline-none focus:ring focus:border-blue-300">選擇分類</button>
          </div>
        </div>

        <div class="mb-4">
          <label class="block text-gray-700">分數</label>
          <img src="../assets/images/FoodRecordList/star.png" alt="">
        </div>

        <div class="mb-4">
          <label class="block text-gray-700">感想</label>
          <textarea v-model="formData.thoughts" class="w-full mt-1 px-3 py-2 border rounded-2xl text-[#BDB890] focus:outline-none focus:ring focus:border-blue-300"></textarea>
        </div>

        <div class="mb-4">
          <label class="block text-gray-700">備註</label>
          <textarea v-model="formData.note" class="w-full mt-1 px-3 py-2 border rounded-2xl text-[#BDB890] focus:outline-none focus:ring focus:border-blue-300"></textarea>
        </div>

        <div class="mb-4">
          <label class="text-gray-700">營業時間</label>
          <span class="text-red-500">*</span>
          <textarea v-model="formData.businessHour" class="w-full mt-1 px-3 py-2 border rounded-2xl text-[#BDB890] focus:outline-none focus:ring focus:border-blue-300"></textarea>
        </div>

        <div class="mb-4">
          <label class="block text-gray-700">店家備註</label>
          <textarea v-model="formData.storeNote" class="w-full mt-1 px-3 py-2 border rounded-2xl text-[#BDB890] focus:outline-none focus:ring focus:border-blue-300"></textarea>
        </div>

        <div class="mb-4">
          <label class="text-gray-700">縣市</label>
          <span class="text-red-500">*</span>
          <div class="flex row-reverse">
            <select class="w-1/2 text-[#BDB890] border rounded-full px-1 py-3" v-model="selectedCountry">  
              <option value="選擇城市">選擇城市</option>
              <option v-for="(country,id) in countries" :key="id" :value="country">
                {{ country }}
              </option>
            </select>
            <select class="w-1/2 text-[#BDB890] border rounded-full px-1 py-3" v-model="selectedTown">
              <option value="選擇區域">選擇區域</option>
              <option v-for="(town,id) in towns" :key="id" :value="town">
                {{ town }}
              </option>
            </select>
          </div> 
        </div>

        <div class="mb-4">
          <label class="block text-gray-700">地址</label>
          <textarea v-model="formData.address" class="w-full mt-1 px-3 py-2 border rounded-2xl text-[#BDB890] focus:outline-none focus:ring focus:border-blue-300"></textarea>
        </div>

        <div class="mb-4">
          <label class="text-gray-700">經緯</label>
          <span class="text-red-500">*</span>
          <input v-model="formData.location" type="text" class="w-full mt-1 px-3 py-2 border rounded-2xl text-[#BDB890] focus:outline-none focus:ring focus:border-blue-300" />
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
          <button type="cancel" class="w-1/5 px-4 py-2 mr-2 border rounded-2xl text-[#BDB890] hover:bg-[#6F6D55]">取消</button>
          <button type="submit" class="w-1/5 px-4 py-2 border rounded-2xl text-[#BDB890] hover:bg-[#6F6D55]">新增</button>
        </div>
      </form>
    </div>
  </div>      
</template>

<style scoped>
</style>
