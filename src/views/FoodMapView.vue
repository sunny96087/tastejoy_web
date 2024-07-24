<script setup>
import { onMounted } from 'vue';
import L from 'leaflet';

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
        }, error => {
          console.error(error);
          alert('無法定位到您現在的位置！！');
        });
      } else {
        alert('定位服務不支持當前瀏覽器');
      }
    });

  // 取得美食紀錄資料 TODO:TOKEN API
  const token = ref('')
  const records = useFoodRecordStore().getFoodRecords(token)

</script>

<template>
  <div id="map" style="height: 100vh;"></div>

</template>
<style scoped>

</style>
