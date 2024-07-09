<script setup></script>

<template>
    <div class="flex w-full gap-2 mb-6 h-10">
        <div class="flex justify-between items-center w-full p-4 mt-2 border rounded-full border-gray-300">
            <input type="text" placeholder="搜尋我的好友" class="">
            <img src="./icon/big.png" alt="User" class="box-border w-6 h-6">
        </div>
        <button class="w-28 mt-2 p-2 bg-green-500 text-white rounded-full">新增</button>
    </div>

    <section class="mb-6 border rounded-2xl">
        <h2 class="text-xl font-semibold px-5 py-3">待確認邀請</h2>
        <div class="px-3">
            <table class="w-full text-left table-fixed">
                <thead>
                    <tr>
                        <th class="w-1/12 py-2 text-center">頭像</th>
                        <th class="w-8/12 py-2">名稱</th>
                        <th class="w-1/12 py-2 text-center">查看</th>
                        <th class="w-1/12 py-2 text-center">同意</th>
                        <th class="w-1/12 py-2 text-center">刪除</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="w-1/12 py-2 text-center"><img src="./icon/UserHead.png" alt="Avatar" class="inline w-10 h-10 rounded-full"></td>
                        <td class="w-8/12 py-2">小明</td>
                        <td class="w-1/12 py-2 text-center"><button class="text-blue-500"><img src="./icon/eyes.png" alt="User" class="inline w-9 h-9 p-2 border-2 rounded-full"></button></td>
                        <td class="w-1/12 py-2 text-center"><button class="text-green-500"><img src="./icon/Check.png" alt="User" class="w-9 h-9 p-2 border-2 rounded-full"></button></td>
                        <td class="w-1/12 py-2 text-center"><button class="text-red-500"><img src="./icon/trashCan.png" alt="User" class="inline w-9 h-9 p-2 border-2 rounded-full"></button></td>
                    </tr>
                    <!-- Repeat above tr for each invite -->
                </tbody>
            </table>
        </div>
    </section>

    <section class="mb-6 border rounded-2xl">
        <h2 class="text-xl font-semibold px-5 py-3">我的好友</h2>
        <div class="px-3">
            <table class="w-full text-left table-fixed">
                <thead>
                    <tr>
                        <th class="w-1/12 py-2 text-center">頭像</th>
                        <th class="w-9/12 py-2">名稱</th>
                        <th class="w-1/12 py-2 text-center">查看</th>
                        <th class="w-1/12 py-2 text-center">刪除</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="w-1/12 py-2 text-center"><img src="./icon/UserHead.png" alt="Avatar" class="inline w-10 h-10 rounded-full"></td>
                        <td class="w-9/12 py-2">小明</td>
                        <td class="w-1/12 py-2 text-center"><button class="text-blue-500"><img src="./icon/eyes.png" alt="User" class="inline w-9 h-9 p-2 border-2 rounded-full"></button></td>
                        <td class="w-1/12 py-2 text-center"><button class="text-red-500"><img src="./icon/trashCan.png" alt="User" class="inline w-9 h-9 p-2 border-2 rounded-full"></button></td>
                    </tr>
                    <tr>
                        <td class="w-1/12 py-2 text-center"><img src="./icon/UserHead.png" alt="Avatar" class="inline w-10 h-10 rounded-full"></td>
                        <td class="w-9/12 py-2">小明</td>
                        <td class="w-1/12 py-2 text-center"><button class="text-blue-500"><img src="./icon/eyes.png" alt="User" class="inline w-9 h-9 p-2 border-2 rounded-full"></button></td>
                        <td class="w-1/12 py-2 text-center"><button class="text-red-500"><img src="./icon/trashCan.png" alt="User" class="inline w-9 h-9 p-2 border-2 rounded-full"></button></td>
                    </tr>
                    <tr>
                        <td class="w-1/12 py-2 text-center"><img src="./icon/UserHead.png" alt="Avatar" class="inline w-10 h-10 rounded-full"></td>
                        <td class="w-9/12 py-2">小明</td>
                        <td class="w-1/12 py-2 text-center"><button class="text-blue-500"><img src="./icon/eyes.png" alt="User" class="inline w-9 h-9 p-2 border-2 rounded-full"></button></td>
                        <td class="w-1/12 py-2 text-center"><button class="text-red-500"><img src="./icon/trashCan.png" alt="User" class="inline w-9 h-9 p-2 border-2 rounded-full"></button></td>
                    </tr>
                    <tr>
                        <td class="w-1/12 py-2 text-center"><img src="./icon/UserHead.png" alt="Avatar" class="inline w-10 h-10 rounded-full"></td>
                        <td class="w-9/12 py-2">小明</td>
                        <td class="w-1/12 py-2 text-center"><button class="text-blue-500"><img src="./icon/eyes.png" alt="User" class="inline w-9 h-9 p-2 border-2 rounded-full"></button></td>
                        <td class="w-1/12 py-2 text-center"><button class="text-red-500"><img src="./icon/trashCan.png" alt="User" class="inline w-9 h-9 p-2 border-2 rounded-full"></button></td>
                    </tr>
                    <tr>
                        <td class="w-1/12 py-2 text-center"><img src="./icon/UserHead.png" alt="Avatar" class="inline w-10 h-10 rounded-full"></td>
                        <td class="w-9/12 py-2">小明</td>
                        <td class="w-1/12 py-2 text-center"><button class="text-blue-500"><img src="./icon/eyes.png" alt="User" class="inline w-9 h-9 p-2 border-2 rounded-full"></button></td>
                        <td class="w-1/12 py-2 text-center"><button class="text-red-500"><img src="./icon/trashCan.png" alt="User" class="inline w-9 h-9 p-2 border-2 rounded-full"></button></td>
                    </tr>
                    <tr>
                        <td class="w-1/12 py-2 text-center"><img src="./icon/UserHead.png" alt="Avatar" class="inline w-10 h-10 rounded-full"></td>
                        <td class="w-9/12 py-2">小明</td>
                        <td class="w-1/12 py-2 text-center"><button class="text-blue-500"><img src="./icon/eyes.png" alt="User" class="inline w-9 h-9 p-2 border-2 rounded-full"></button></td>
                        <td class="w-1/12 py-2 text-center"><button class="text-red-500"><img src="./icon/trashCan.png" alt="User" class="inline w-9 h-9 p-2 border-2 rounded-full"></button></td>
                    </tr>
                    <tr>
                        <td class="w-1/12 py-2 text-center"><img src="./icon/UserHead.png" alt="Avatar" class="inline w-10 h-10 rounded-full"></td>
                        <td class="w-9/12 py-2">小明</td>
                        <td class="w-1/12 py-2 text-center"><button class="text-blue-500"><img src="./icon/eyes.png" alt="User" class="inline w-9 h-9 p-2 border-2 rounded-full"></button></td>
                        <td class="w-1/12 py-2 text-center"><button class="text-red-500"><img src="./icon/trashCan.png" alt="User" class="inline w-9 h-9 p-2 border-2 rounded-full"></button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>

<style scoped></style>
