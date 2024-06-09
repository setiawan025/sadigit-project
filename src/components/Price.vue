<script setup>
defineProps({
  data: String,
  title: String,
  desc: String
})
</script>

<template>
  <div>
    <h1 class="animate-pulse text-4xl font-extrabold leading-8 text-dark-grey-900">
      {{ title }}
    </h1>
    <p class="text-base font-bold leading-8 text-dark-grey-900">
      {{ sub }}
    </p>
    <p class="text-base font-medium leading-8 text-dark-grey-600">
      {{ desc }}
    </p>
  </div>
</template>
