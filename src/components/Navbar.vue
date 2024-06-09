<script setup>
defineProps({
  link: String,
  title: String
})
</script>

<template>
  <nav class="space-x-24 m-2 p-2">
    <a :href="link">
      {{ title }}
    </a>
  </nav>
</template>
