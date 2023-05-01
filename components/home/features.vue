<template>
    <section class="bg-white dark:bg-gray-900 md:flex md:justify-center md:items-center">
        <div class="md:container px-6 py-10 mx-auto max-w-7xl w-full">
            <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">Why <br> Plant Oasis</h1>

            <div class="mt-2">
                <span class="inline-block w-40 h-1 bg-green-700 rounded-full"></span>
                <span class="inline-block w-3 h-1 ml-1 bg-green-700 rounded-full"></span>
                <span class="inline-block w-1 h-1 ml-1 bg-green-700 rounded-full"></span>
            </div>

            <div class="mt-8 xl:mt-12 flex max-w-7xl w-full items-center">
                <div class="flex flex-wrap gap-3">
                    <div class="hidden ph-cell-signal-full"></div>
                    <div class="space-y-3" v-for="item in features">
                    <span class="inline-block p-3 text-green-700 bg-orange-100 rounded-xl dark:text-white dark:bg-blue-500">
                        <div :class="item.icon"></div>
                    </span>
                    <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">{{ item.title }}</h1>
                       <div class="">
                            <p class="text-gray-500 dark:text-gray-300">
                           {{ item.description }}
                            </p>
                        </div>
                    </div>
                 
                </div>

           
            </div>
        </div>
    </section>
</template>

<script setup>

let features = ref([
    {
        title: "feature #1",
        icon: 'i-ph:list',
        description:"jfdksjflkajsdlfjsalkfjlsakjfdlksjdflsajdlfj"
    }
])

</script>