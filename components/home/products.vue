<template>
    <section id="products" class="">
        <div class="max-w-7xl w-full p-5 mx-auto">
            <div class="py-5 pb-10">
                <div class="font-poppins text-4xl font-bold">Our <span class="text-green-600">Products</span></div>
            </div>
              <swiper
        :slidesPerView="2"
     
        :spaceBetween="10"
        :centeredSlides="true"
        :pagination="{
            clickable: true,
        }"
        :breakpoints="{
            '640': {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            '768': {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            '1024': {
                slidesPerView: 5,
                spaceBetween: 50,
            },
        }"
       
        class="mySwiper"
      >
      <swiper-slide class="w-80 h-90 relative" v-for="product,index in products" :key="index">
        <img :src="product.image" :alt="product.name" class="object-cover w-full h-90 rounded-xl"/>
        <div class="absolute w-full bg-gray-800 h-10 z-10 bottom-0 rounded-b-xl"><div class=" flex gap-3 justify-center items-center p-3 text-md text-white font-poppins">
    {{ product.name }} <div class="i-ph:arrow-right-bold text-white text-xl"></div>
        </div></div>
    </swiper-slide>
      
     
      
   
      </swiper>
        </div>
           <div class="px-4 py-16 mx-auto lg:flex lg:items-center lg:justify-between max-w-7xl">
                        <h2 class="text-2xl font-semibold tracking-tight font-poppins text-gray-800 xl:text-3xl dark:text-white">
                            Download our <span class="text-green-500">borchure</span>
                        </h2>

                        <div class="mt-8 lg:mt-0">
                            <div class="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:-mx-2">
                                <button class="px-6 py-2 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg focus:ring focus:ring-green-300  fo sm:mx-2 hover:bg-green-500 border-none focus:bg-green-500">
                                   Download
                                </button>
                            </div>

                        </div>
                    </div>
    </section>
</template>
<script setup>
let products =[
{
    name: 'Coco Peat',
    description: 'Coco peat is an excellent substrate for cultivation. Quality coco peat will have good water retention. Generally, coco peat or Coir pith has a very high salt content. Hence coco peat is washed with clean and natural water to lower ec levels, which is very important for root and plant growth. Washed coco peat is heat-treated, screened, and graded before being processed into coco peat products of various granularity and denseness .Coco peat contains many air pockets that increase the surface area for the root system that provides better absorption of nutrients from the soil.',
    image: '/img/products/cocoPeat.jpeg',

},
{
    name: 'Geo Textiles',
    description: 'Coir geo textiles have the mechanical strength necessary to hold soil in place and prevent erosion. The netting breaks up run-off heavy rains and dissipates the energy of flowing water. Coir also promotes the growth of new vegetation by absorbing water and preventing the topsoil from drying out.',
    image: '/img/products/GeoTextile.jpeg',

},
{
    name: 'Coir Logs',
    description: `Coconut coir log is a biodegradable erosion control product for hills, banks, shorelines, and other erosion-prone areas, made of 100% natural coir fibers compressed in tubular mesh netting. It is easy to install and these coir fiber logs create a natural control area that helps establish growth and control erosion. Coconut coir logs have been effectively used for erosion control in restoration projects, stabilization areas, and construction job sites.`,
    image: '/img/products/coirlogs.jpg',

},
{
    name: 'Garden Articles',
    description: 'Coir Pot is a biodegradable cultivation pot made of coconut fibers. It is used for horticulture, ornamental plant and nurseries, as well as for the domestic gardening market. It has an exceptionally high permeability to water, air, and roots. Coir pot is used by those looking for faster cultivation.',
    image: '/img/products/garden.jpeg',

},

]
</script>