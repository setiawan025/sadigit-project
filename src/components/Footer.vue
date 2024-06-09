<script setup>
import { Facebook, Twitter, Github, Linkedin, Instagram } from '@/components/icons'
import { Navbar } from '@/components'

const nav = [
  {
    href: '#about',
    title: 'About'
  },
  {
    href: '#features',
    title: 'Features'
  },
  { href: '#blog', title: 'Blog' },
  {
    href: '#resources',
    title: 'Resources'
  },
  {
    href: '#partner',
    title: 'Partner'
  },
  {
    href: '#help',
    title: 'Help'
  },
  { href: '#term', title: 'Term' }
]
</script>

<template>
  <footer>
    <div class="">
      <div class="py-12">
        <div class="flex flex-col items-center justify-center">
          <img src="@/assets/images/Logo.png" alt="logo" class="w-[156px]" />

          <nav class="flex justify-evenly my-5">
            <Navbar v-for="step in nav" :href="step.href" :title="step.title" />
          </nav>

          <div class="justify-center flex space-x-8 mb-8">
            <a href="#"><Facebook /></a>
            <a href="#"><Twitter /></a>
            <a href="#"><Github /></a>
            <a href="#"><Linkedin /></a>
            <a href="#"><Instagram /></a>
          </div>

          <p class="mt-6 text-base font-medium leading-8 text-center text-dark-grey-600">
            © 2023 Horizon UI Library. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
