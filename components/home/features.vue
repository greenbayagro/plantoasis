<template>
    <section class="dark:bg-gray-900 md:flex flex-col md:justify-center md:items-center relative w-screen py-10 bg-orange-50 flex justify-center items-center z-5">
     
          <div class="absolute -z-20 top-0 right-0">
                        <img src="/img/palmRT.png" alt="" class="w-48 md:w-72">
                    </div>
          <div class="absolute -z-20 top-1/2 left-0">
                        <img src="/img/palmextraL.png" alt="" class="w-24 md:w-24">
                    </div>
      
    
                      <div class="text-4xl py-10 font-bold font-poppins">
                <div class="text-gray-700"><span class="text-green-600">Why</span> plantoasis ?</div>
            </div>                       
     <div class="max-w-7xl w-full flex justify-center  gap-5 flex-wrap my-10 p-3">
       
        <div class="p-5 max-w-xs w-full bg-orange-100 rounded font-poppins shadow" v-for="feature,index in features" :key="index">
             <div class="text-3xl text-green-600">
                    <div :class="feature.icon"></div>
                </div>
            <div class="py-3 text-xl font-bold text-gray-700">{{ feature.title }} </div>
            
           <div class="text-sm">
            {{ feature.description }}
           </div>
        </div>
     </div>
                                    
      
          
       
    </section>
</template>

<script setup>

let features = ref([
    {
        title: "Trusted",
        icon: 'i-ph:circle-wavy-check-fill',
        description:"At Plant Oasis, we believe that agriculture should be focused on nurturing and preserving the earth's natural resources rather than exploiting them for profit. We work with trusted suppliers and farmers who share our values to bring you products that are free from harmful chemicals and pesticides, and that promote biodiversity and soil health."
    },
    {
        title: "Diverse",
        icon: 'i-ph:tree-evergreen-fill',
        description:"Our range of products includes a wide range of coir based products such as Coco Peat,Coir Geo textile, Coir Logs ,Coir Fibre . We also offer various value added coir based home furnishing products like door mats, carpets for your home and office furnihsing buisness"
    },
    {
        title: "Empowering Local Communities",
        icon: 'i-ph:users-four-fill',
        description:"In addition to our commitment to sustainable agriculture, we are also passionate about supporting local communities and small businesses. We work with farmers and suppliers from all around the world, and we strive to create meaningful relationships with each of them. By doing so, we can ensure that our customers receive products of the highest quality while supporting ethical and responsible business practices."
    },
 
])

</script>