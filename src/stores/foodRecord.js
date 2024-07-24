import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useFoodRecordStore = defineStore('record', () => {
  
  // 先用假資料
  const records = ref(
    [
      {
        store: '海底撈',
        phone: '07-1234567',
        foodName: '豬肚雞鍋,牛肉,花枝漿',
        description: '好吃，湯頭味道很好',
        date: '2024-07-17',
        category: '火鍋',
        score: '4',
        thoughts: '好吃 但貴了一點',
        note: '記得要點蝦滑',
        businessHour:'0900~2400',
        storeNote:'以後跟朋友聚會',
        country:'高雄市三民區',
        address:'博愛路100號',
        location:'120.30,22.66',
        isPublic:'',
      },
      {
        store: '王品牛排',
        phone: '07-9876543',
        foodName: '牛排,雞排',
        description: '好吃，氣氛也好',
        date: '2024-07-18',
        category: '排餐',
        score: '3',
        thoughts: '普普通通 但便宜',
        note: '記得要跟店員說你好',
        businessHour:'1100~2200',
        storeNote:'以後跟家人聚會',
        country:'高雄市楠梓區',
        address:'大同路50號',
        location:'120.10,22.36',
        isPublic:'',
      },
    ]
  );
  // 依照logini token取得food record
  const getFoodRecords = ((token)=>{
    let foodRecords = [];
    axios.get('https://tastejoy-api.onrender.com/food-record/logged-in')
      .then((res)=> {
        foodRecords = res.data
      }).catch((err)=>{
        // TODO錯誤處理
        console.log(err)
      })
    return records;
  })  
  
  return { getFoodRecords }
})
