<script setup>
defineProps({
  desc: String,
  name: String,
  job: String,
  image: String
})
</script>

<template>
  <article
    class="grid place-items-center p-9 rounded-xl bg-slate-100 transition transform hover:-translate-y-1"
  >
    <h1 class="text-center text-xl font-bold pb-10 text-dark-grey-900">
      {{ desc }}
    </h1>

    <div class="w-10 h-10 overflow-hidden rounded-full mt-5">
      <img :src="image" alt="" />
    </div>
    <h1 class="mt-4 text-lg font-extrabold leading-8 text-center text-dark-grey-900">
      {{ name }}
    </h1>
    <p class="text-xs font-medium text-center text-dark-grey-600">{{ job }}</p>
  </article>
</template>
