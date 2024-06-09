<script setup>
import moon from '@/components/icons/moon.vue'
import phone from '@/components/icons/phone.vue'
</script>

<template>
  <section id="product" class="container mx-auto">
    <div class="grid w-full grid-cols-2 gap-44 ml-11">
      <div class="flex flex-col items-start justify-center space-y-6">
        <div class="max-w-[80%]">
          <p class="flex gap-3 text-sm text-purple-500 font-bold leading-5 tracking-[3.08px]">
            <moon />TRENDIEST TAILWIND TEMPLATES
          </p>
          <h1 class="text-5xl font-extrabold leading-[60px] text-dark-grey-900 mt-3">
            Take your website to the next level with Horizon UI
          </h1>
        </div>
        <p>
          Save hundreds of hours trying to create and develop a dashboard from scratch. The fastest,
          most responsive & trendiest dashboard is here. Seriously.
        </p>

        <div class="flex gap-[20px]">
          <button
            class="bg-purple-blue-500 py-3 px-8 rounded-md text-white hover:bg-purple-blue-700"
          >
            Get started now
          </button>
          <button class="flex gap-2 items-center rounded-md py-4 px-7 hover:bg-slate-200">
            <phone />Book a free call
          </button>
        </div>
      </div>
      <div><img src="@/assets/images/sampul.png" alt="sampul" /></div>
    </div>
  </section>
</template>
