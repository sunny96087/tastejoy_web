<script setup>
import { onMounted } from 'vue';
import L from 'leaflet';

onMounted(() => {
      // 获取用户当前位置
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          const { latitude, longitude } = position.coords;
          const map = L.map('map').setView([latitude, longitude], 13);

          // 添加 OpenStreetMap 图层
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          }).addTo(map);

          // 添加一个标记到用户当前位置
          L.marker([latitude, longitude]).addTo(map)
            .bindPopup('You are here!')
            .openPopup();
        }, error => {
          console.error(error);
          alert('Unable to retrieve your location');
        });
      } else {
        alert('Geolocation is not supported by this browser.');
      }
    });

</script>

<template>
  <div id="map" style="height: 100vh;"></div>

</template>
<style scoped>

</style>
