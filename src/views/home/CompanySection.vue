<script setup>
import { foto } from '@/assets/images'
import { Testimoni } from '@/components'

const testi = [
  {
    desc: 'A must needed kit for every single software arhitect. It makes your coding life easier and your final product will be blooming.',
    name: 'Tiana Schleifer',
    job: 'CEO & Founder',
    image: foto
  },
  {
    desc: 'A must needed kit for every single software arhitect. It makes your coding life easier and your final product will be blooming.',
    name: 'Tiana Schleifer',
    job: 'CEO & Founder',
    image: foto
  }
]
</script>

<template>
  <section id="company" class="container mx-auto pb-0">
    <div class="flex flex-col items-center justify-center my-36">
      <h1 class="text-3xl font-extrabold leading-9 text-center text-dark-grey-900">
        Customer Testimonials
      </h1>

      <p class="text-center font-medium text-[#36383c] leading-8 max-w-[600px] mt-4">
        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
        Elit sunt amet fugiat veniam occaecat fugiat aliqua.
      </p>

      <div class="mt-[74px] grid grid-cols-2 gap-x-5 gap-y-5">
        <Testimoni
          v-for="testimoni in testi"
          :desc="testimoni.desc"
          :name="testimoni.name"
          :job="testimoni.job"
          :image="testimoni.image"
        />
      </div>
    </div>
  </section>

  <section class="container mx-auto mb-36">
    <div class="flex justify-between">
      <h1 class="animate-pulse text-3xl leading-9 text-dark-grey-900">
        <span class="inline-block font-extrabold">Save time with Horizon.</span>
        <span class="inline font-medium"><br />Turn your visitors into clients.</span>
      </h1>
      <div class="button flex space-x-4 my-4 mx-7 pr-4 pl-4 placeholder:justify-end">
        <button
          class="px-8 py-2 boder-solid border-2 border-purple-blue-500 text-purple-blue-500 rounded-2xl font-bold hover:bg-slate-200"
        >
          Try Demo
        </button>
        <button
          class="px-6 py-4 bg-purple-blue-500 text-white rounded-2xl hover:bg-purple-blue-700"
        >
          Get Started Now
        </button>
      </div>
    </div>
  </section>
</template>
