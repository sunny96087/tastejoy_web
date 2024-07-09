<script setup></script>

<template>
  <div class="container m-auto w-fit">
    <div class="searchBar flex text-xs">
      <div class="filterToggle border border-green4 rounded-full flex">
        <div class="m-1 flex space-x-2">

          <div class="bg-green4 py-1.5 px-3 rounded-full w-14" >所有</div>
          <div class="text-zinc-700 py-1.5 px-3 w-14">好友</div>
          <div class="text-zinc-700 py-1.5 px-3 w-14">我的</div>
        </div>
      </div>
    <div>
      <input type="text" class="keywordSearch" placeholder="搜尋文章"><img class="inline-block w-5 h-5" src="../assets/Article/MagnifyingGlass.png" alt="">
    </div>

      <div class="createPost bg-green4 py-2.5 px-10 rounded-full">新增</div>
    </div>
  </div>
  <div class="aticleCard">
      <div class="posterData"></div>
      <div class="articleImg"><img src="" alt=""></div>
      <div class="articleText"></div>
      <div class="articleBtn"></div>
  </div>
</template>

<style scoped>

</style>
