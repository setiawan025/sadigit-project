<script setup>
import { thunder2 } from '@/assets/images'
import { Price } from '@/components'

const pricing = [
  {
    title: '340+',
    sub: 'Successful Projects',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  },
  {
    title: '$10m',
    sub: 'Annual Percentage Rate',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  },
  {
    title: '2.8k+',
    sub: 'Clients Worldwide',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  },
  {
    title: '7000+',
    sub: 'Daily Visits',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  }
]
</script>

<template>
  <section id="pricing">
    <div class="container mx-auto grid grid-cols-2 gap-[110px]">
      <div class="grid grid-cols-2 gap-y-15 gap-x-10 items-center">
        <div class="col-span-2">
          <h1 class="text-3xl font-extrabold leading-8 text-dark-grey-900">
            Boost your workflow with Horizon
          </h1>
          <p class="mt-2 text-base font-medium leading-6 text-dark-grey-600">
            Urna duis convallis convallis tellus interdum velit laoreet pentesque aliquam tortor
            consequat porta.
          </p>
        </div>

        <Price
          v-for="price in pricing"
          :data="price.data"
          :title="price.title"
          :desc="price.desc"
        />
      </div>
      <div class="flex items-center justify-end">
        <img :src="thunder2" alt="thunder2.png" srcset="" />
      </div>
    </div>
  </section>
</template>
