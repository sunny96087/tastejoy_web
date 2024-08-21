<script setup>
import { onMounted, ref, createApp, h } from 'vue'
import {  } from 'vue';
import L from 'leaflet'
import CustomPopup from '../components/CustomPopup.vue';
import { useFoodRecordStore } from '../stores/foodRecord.js'

// 取得美食紀錄資料 TODO:TOKEN API
let isNoData = false;
const token = ref('')
const records = useFoodRecordStore().getFoodRecords(token)
if(records.value.length === 0){
  isNoData = true;
}

// 定義默認 marker 和selected-marker 的圖標
const defaultIcon = L.icon({
  iconUrl: 'src/assets/images/FoodRecordMap/location-marker-unselected.svg',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34]
});

const selectedIcon = L.icon({
  iconUrl: 'src/assets/images/FoodRecordMap/location-marker-selected.svg',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34]
});

// 記錄選中的 marker
const selectedMarker = ref(null);

// 重置所有 marker 的顏色為默認
function resetMarkers(map) {
  map.eachLayer((layer) => {
    if (layer instanceof L.Marker) {
      layer.setIcon(defaultIcon);
    }
  });
}


onMounted(() => {
      // 獲取用户當前位置
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          const { latitude, longitude } = position.coords;
          const map = L.map('map').setView([latitude, longitude], 19);

          // 添加 OpenStreetMap 图层
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          }).addTo(map);

          // 添加一个mark用户當前位置
          L.marker([latitude, longitude]).addTo(map)
            .bindPopup('現在位置!')
            .openPopup();

          // 添加用户儲存的紀錄位置
          if(!isNoData){
            // 處理紀錄陣列中的資料
            for (var i = 0 ; i < records.value.length; i++) {
                let location = records.value[i].location; //120.30,22.66
                let itemLatitude = location.split(",")[0]; // 緯度
                let itemLongitude = location.split(",")[1]; // 經度

                //將紀錄mark起來
                const marker = L.marker([Number(itemLongitude), Number(itemLatitude)], { icon: defaultIcon }).addTo(map);
                const popupData = {
                    store:records.value[i].store,
                    category:records.value[i].category,
                    address:records.value[i].address,
                    businessHour:records.value[i].businessHour,
                    phone:records.value[i].phone,
                    score:records.value[i].score,
                  };

        
                  let currentPopupMarker = null;
                  marker.on('click', () => {
                    
                    // 設置當前的 marker 為新點選的 marker
                    currentPopupMarker = marker;
                    // 重置所有 marker 的顏色
                    resetMarkers(map);

                    // 設置當前選中的 marker
                    marker.setIcon(selectedIcon);
                    selectedMarker.value = marker;

                    const container = document.createElement('div');    
                    container.classList.add('custom-popup');  // 添加自定義樣式   
                    
                    const app = createApp({
                      render() {
                        return h(CustomPopup,{ infoData: popupData });
                      }
                    });

                    app.mount(container);
                    
                    // 將彈出框直接插入到最外層的 #map 容器中
                    const appContainer = document.getElementById('map');
                    appContainer.appendChild(container);
                 
                });
              }
             
          }
           
        }, error => {
          console.error(error);
          alert('無法定位到您現在的位置！！');
        });
      } else {
        alert('定位服務不支持當前瀏覽器');
      }
    });



</script>

<template>
  <div id="map" style="height: 100vh;"></div>
</template>

<style>
.custom-popup {
  position: absolute;
  bottom: 0px;
  left: 0px;
  z-index: 1000;
  width: 100%;
  margin:0 auto;
  height: auto;
  background-color: #FFFDF6;
  opacity: 0.9;
  padding: 5px;
  border: 2px solid #BDB890;
  border-radius:0.75rem;
}
</style>
