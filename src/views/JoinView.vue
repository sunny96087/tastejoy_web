<script setup></script>

<template>
  <div class="bg-pc min-w-screen min-h-screen bg-cover bg-center bg-no-repeat bg-scroll h-[853px]">
    <div class="min-w-screen mx-auto pl-15 flex flex-row-reverse max-lg:flex-col max-md:pl-0">
      <div
        class="flex flex-col pt-27 pl-[82px] pr-5 max-md:pt-[70px] max-lg:pl-[22px] animate-slide-in-right max-md:animate-none"
      >
        <div class="max-lg:hidden">
          <h2 class="text-3 font-bold text-green-3 absolute pt-[2px] pl-[2px]">
            想不到下一餐吃什麼？
          </h2>
          <h2 class="text-3 font-bold text-green-1 relative">想不到下一餐吃什麼？</h2>
        </div>
        <div class="pl-10 max-md:pl-0">
          <h2 class="text-3 max-md:text-3-mb font-bold text-green-3 absolute pt-[2px] pl-[2px]">
            開啟美食紀錄之旅吧！
          </h2>
          <h2 class="text-3 max-md:text-3-mb font-bold text-green-1 relative">
            開啟美食紀錄之旅吧！
          </h2>
        </div>
      </div>
      <div
        class="w-[488px] mt-35 px-5 border rounded-3xl bg-white animate-slide-in-right max-lg:mx-auto max-lg:mt-[14px] max-md:w-[334px]"
      >
        <h3 class="text-2 font-bold text-slate-900 pt-10 pb-7">註冊</h3>
        <form action="" method="post" class="grid gap-y-4">
          <div>
            <input
              type="email"
              class="w-[448px] max-md:w-[294px] placeholder-zinc-400 text-zinc-700 border border-green-4 rounded-full py-2.5 pl-3"
              name="email"
              placeholder="帳號 (正確的 Email, 找回密碼時需使用)"
              aria-label="帳號 (正確的 Email, 找回密碼時需使用)"
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
              autocomplete="new-password"
              minlength="6"
              maxlength="128"
              required
            />
          </div>
          <div>
            <input
              type="password"
              class="w-[448px] max-md:w-[294px] placeholder-zinc-400 text-zinc-700 border border-green-4 rounded-full py-2.5 pl-3"
              name="password"
              placeholder="再次確認密碼"
              aria-label="再次確認密碼"
              autocomplete="new-password"
              minlength="6"
              maxlength="128"
              required
            />
          </div>
          <div class="w-[448px] max-md:w-[294px] flex justify-end pb-15">
            <button
              type="submit"
              class="text-green-1 bg-green-4 opacity-50 rounded-full py-2.5 px-10 hover:opacity-100"
            >
              註冊
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
          <span class="text-green-4">已經有帳號了!</span>
          <span class="text-green-4 underline pl-2">
            <RoterLink to="/login">我要登入</RoterLink>
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
