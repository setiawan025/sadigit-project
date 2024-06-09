<script setup>
import { PanahKanan } from '@/components/icons/'
</script>
<template>
  <section id="features" class="container mx-auto">
    <div>
      <di class="container">
        <div class="py-[120px] w-full flex-col justify-center items-center">
          <h1 class="text-3xl font-extrabold leading-[44px] text-center text-dark-grey-900">
            How Horizon works?
          </h1>
          <p class="mt-3 text-base font-medium leading-8 text-center text-dark-grey-600">
            Tellus rutrum tellus pellentesque eu tincidunt tortor condimentum.
          </p>
          <div class="w-full mt-[60px] flex flex-row justify-between items-center space-x-[40px]">
            <div class="flex flex-row justify-between flex-1 space-x-5">
              <div
                class="flex items-center justify-center w-12 h-12 text-base font-bold leading-8 text-center text-white rounded-full bg-purple-blue-500"
              >
                1
              </div>
              <div class="flex flex-col flex-1">
                <h1 class="text-base font-bold leading-8 text-dark-grey-900">
                  Create your Account
                </h1>
                <p class="text-base font-medium leading-8 text-dark-grey-600">
                  Condimentum vit pellemsque habitant morbi at molestie.
                </p>
              </div>
            </div>
            <PanahKanan />
            <div class="flex flex-row justify-between flex-1 space-x-5">
              <div
                class="flex items-center justify-center w-12 h-12 text-base font-bold leading-8 text-center bg-white border-2 rounded-full text-purple-blue-500 border-purple-blue-500"
              >
                2
              </div>
              <div class="flex flex-col flex-1">
                <h1 class="text-base font-bold leading-8 text-dark-grey-900">
                  Create your Account
                </h1>
                <p class="text-base font-medium leading-8 text-dark-grey-600">
                  Condimentum vit pellemsque habitant morbi at molestie.
                </p>
              </div>
            </div>
            <PanahKanan />
            <div class="flex flex-row justify-between flex-1 space-x-5">
              <div
                class="flex items-center justify-center w-12 h-12 text-base font-bold leading-8 text-center bg-white border-2 rounded-full text-purple-blue-500 border-purple-blue-500"
              >
                3
              </div>

              <div class="flex flex-col flex-1">
                <h1 class="text-base font-bold leading-8 text-dark-grey-900">
                  Create your Account
                </h1>
                <p class="text-base font-medium leading-8 text-dark-grey-600">
                  Condimentum vit pellemsque habitant morbi at molestie.
                </p>
              </div>
            </div>
          </div>
        </div>
      </di>
    </div>
  </section>
</template>
