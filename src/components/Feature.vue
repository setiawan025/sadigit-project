<script setup>
defineProps({
  icon: Object,
  title: String,
  desc: String
})
</script>

<template class="">
  <div
    class="flex flex-col items-center flex-1 py-6 px-9 hover:shadow-2xl hover:rounded-2xl transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none container mx-auto"
  >
    <div class="flex items-center justify-center w-16 h-16 rounded-xl bg-purple-blue-500">
      <component :is="icon" />
    </div>
    <h1 class="mt-6 text-2xl font-bold leading-8 text-center text-dark-grey-900">{{ title }}</h1>
    <p class="mt-2 text-base font-medium leading-8 text-center text-dark-grey-600">{{ desc }}</p>
  </div>
</template>
