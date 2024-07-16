<script setup></script>

<template>
  <div class="bg-pc min-h-screen bg-cover bg-center bg-no-repeat bg-scroll h-[853px]">
    <div class="min-w-screen mx-auto px-15 flex max-lg:flex-col max-md:px-0">
      <div class="container pt-27 max-md:pt-[68px] max-md:pl-5">
        <h2 class="text-1 max-md:text-1-mb font-bold text-green-3 absolute pt-[2px] pl-[2px]">
          今天想吃?
        </h2>
        <h2 class="text-1 max-md:text-1-mb font-bold text-green-1 relative">今天想吃?</h2>
      </div>
      <div
        class="w-[488px] mt-[168px] px-5 border rounded-3xl bg-white max-lg:mx-auto max-lg:mt-[30px] max-md:w-[334px]"
      >
        <h3 class="text-2 font-bold text-slate-900 pt-10 pb-7">登入</h3>
        <form action="" method="post" class="grid gap-y-4">
          <div>
            <input
              type="email"
              class="w-[448px] max-md:w-[294px] placeholder-zinc-400 text-zinc-700 border border-green-4 rounded-full py-2.5 pl-3"
              name="email"
              placeholder="帳號"
              aria-label="帳號"
              autocomplete="email"
              required
              autofocus
            />
          </div>
          <div>
            <input
              type="password"
              class="w-[448px] max-md:w-[294px] placeholder-zinc-400 text-zinc-700 border border-green-4 rounded-full py-2.5 pl-3"
              name="password"
              placeholder="密碼 (英數混合且不少於六位數)"
              aria-label="密碼 (英數混合且不少於六位數)"
              autocomplete="current-password"
              minlength="6"
              maxlength="128"
              required
            />
          </div>
          <div class="w-[448px] max-md:w-[294px] flex justify-between pb-15">
            <a href="" class="text-green-4">忘記密碼</a>
            <button
              type="submit"
              class="text-green-1 bg-green-4 opacity-50 rounded-full py-2.5 px-10 hover:opacity-100"
            >
              登入
            </button>
          </div>
        </form>
        <div class="hori-line max-md:w-[294px]"></div>
        <div class="flex gap-6 pt-6 pb-6 justify-center">
          <a href="#">
            <img src="../assets/images/icon-google.png" alt="Google" class="icon" />
          </a>
          <a href="#">
            <img src="../assets/images/icon-discord.png" alt="Discord" class="icon" />
          </a>
          <a href="#">
            <img src="../assets/images/icon-github.png" alt="Github" class="icon" />
          </a>
        </div>
        <div class="hori-line max-md:w-[294px]"></div>
        <div class="pt-6 pb-10 pl-0 text-center">
          <span class="text-green-4">還沒有帳號嗎?</span>
          <span class="text-green-4 underline pl-2">
            <RoterLink to="/register">點擊註冊</RoterLink>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
body {
  font-family: 'Noto Sans TC', sans-serif;
}
.text-1 {
  font-size: 60px;
  line-height: 92.67px;
}
.text-1-mb {
  font-size: 40px;
  line-height: 57.92px;
}
.text-2 {
  font-size: 28px;
  line-height: 40.54px;
}
.text-3 {
  font-size: 45px;
  line-height: 81.09px;
}
.text-3-mb {
  font-size: 32px;
  line-height: 46.34px;
}
.hori-line {
  width: 448px;
  height: 1px;
  border-top: solid #bdb890 1px;
}
.icon {
  width: 60px;
  height: 60px;
  border: #bdb890 1px solid;
  border-radius: 50%;
  padding: 6px;
}
.bg-white {
  background: #fffdf6;
  opacity: 75%;
}
</style>
