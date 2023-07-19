<script setup>
import 'swiper/css';
const swiper = useSwiper()
 defineProps(['name','description','image'])
function handleMouseEnter() {

    swiper.value.autoplay.stop()
}
function handleMouseLeave() {
   
    swiper.value.autoplay.start()
}

</script>

<template>
     
          <div class="group" :onmouseenter="handleMouseEnter" :onmouseleave="handleMouseLeave">
              <img :src="image" :alt="name" class="object-cover w-full h-90 rounded-xl"/>
                <div class="absolute w-full bg-gray-800 group-hover:bg-opacity-70 h-15 group-hover:h-full group-hover:rounded-t-xl transition-all ease-out z-10 bottom-0 rounded-b-xl"><div class="  p-3 text-md text-white font-poppins">
                    <div class="flex gap-3 justify-center items-center font-semibold"> {{ name }} <div class="i-ph:arrow-right-bold text-white text-xl group-hover:hidden block transition-all ease-out"></div></div>
                    <div class="font-latobody text-sm">
                        {{ description }}
                    </div>
   
                </div></div>
          </div>
      
</template>
