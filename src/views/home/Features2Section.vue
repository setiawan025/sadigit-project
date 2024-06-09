<script setup>
import { Chart, Email, User } from '@/components/icons'
import { Feature } from '@/components'

const features = [
  {
    icon: Email,
    title: 'Share team inboxes',
    desc: 'Whether you have a team of 2 or 200, our shared team inboxes keep everyone'
  },
  {
    icon: Chart,
    title: 'Analytics dashboards',
    desc: ' Whether you have a team of 2 or 200, our shared team inboxes keep everyone'
  },
  {
    icon: User,
    title: 'Deliver instant answer',
    desc: ' Whether you have a team of 2 or 200, our shared team inboxes keep everyone'
  }
]
</script>
<template>
  <div class="container mx-auto">
    <div class="py-[120px] w-full flex-col justify-center items-center pt-8">
      <div class="w-full mt-[60px] flex flex-row justify-between items-center">
        <Feature
          v-for="feature in features"
          :icon="feature.icon"
          :title="feature.title"
          :desc="feature.desc"
        />
      </div>
    </div>
  </div>
</template>
