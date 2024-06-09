<script setup>
import { Header, Footer } from '@/components'
import {
  ProductSection,
  FeturesSection,
  Features2Section,
  PricingSection,
  CompanySection
} from '@/views/home'
</script>

<template>
  <Header />
  <main>
    <ProductSection />
    <FeturesSection />
    <Features2Section />
    <PricingSection />
    <CompanySection />
  </main>
  <Footer />
</template>
