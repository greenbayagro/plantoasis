<template>
    <nav x-data="{ isOpen: false }" class="relative bg-white shadow dark:bg-gray-800">
        <div class="px-6 py-4 mx-auto md:flex md:justify-between md:items-center md:container">
            <div class="flex items-center justify-between">
                <a href="#" class="no-underline text-green-600 text-2xl flex justify-center items-center lowercase">
                    <img src="/logo.png" alt="" class="w-12"/> <span class="px-2 font-poppins font-bold"><span class="text-orange-500">Plant</span> Oasis</span>
                </a>

                <!-- Mobile menu button -->
                <div class="flex md:hidden">
                    <div x-cloak @click="isOpen = !isOpen"  class="text-xl bg-none text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400  focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                      <div class="" v-if="isOpen">
                    <div class="i-ph:x-light"></div>
                    </div>
                      <div class="" v-else>
                         <div class="i-ph:list"></div>
                       
                      </div>
                    </div>
                </div>
            </div>

            <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
            <div  :class="[isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full']" class="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
                <div class="flex md:justify-center md:items-center flex-col md:flex-row gap-3 font-poppins">
                   <router-link to="#" class="no-underline text-gray-900 hover:text-orange-400">Home</router-link>
                   <router-link to="#about" class="no-underline text-gray-900 hover:text-orange-400">About</router-link>
                   <router-link to="#products" class="no-underline text-gray-900 hover:text-orange-400">Products</router-link>
                   <router-link to="#contact" class="no-underline text-gray-900 hover:text-orange-400">Contact</router-link>
                  
                </div>

             
            </div>
        </div>
    </nav>
</template>

<script setup>
let isOpen = ref(false)
</script>