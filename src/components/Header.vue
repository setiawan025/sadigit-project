<template>
  <header class="flex justify-between items-center py-4 px-14 z-10">
    <div class="flex items-center justify-start">
      <img class="w-[156px]" src="/src/assets/images/Logo.png" alt="logo" />
    </div>
    <nav>
      <ul class="flex space-x-4 gap-7">
        <li><a href="#product" class="hover:underline">Product</a></li>
        <li><a href="#features" class="hover:underline">Features</a></li>
        <li><a href="#pricing" class="hover:underline">Pricing</a></li>
        <li><a href="#company" class="hover:underline">Company</a></li>
      </ul>
    </nav>
    <div class="flex gap-[20px]">
      <button class="px-4 py-2 rounded-xl text-sm font-bold leading-6 hover:bg-gray-100">
        log in
      </button>
      <button
        class="px-4 py-2 rounded-xl bg-purple-blue-100 text-sm font-bold leading-6 text-purple-blue-500 hover:bg-purple-blue-200"
      >
        Sign Up
      </button>
    </div>
  </header>
</template>
