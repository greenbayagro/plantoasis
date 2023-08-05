<template>
    <section id="products" class="bg-orange-50 relative py-50">
        <div class="max-w-7xl w-full p-5 mx-auto">
            <div class="py-5 pb-10" >
                <div class="font-poppins text-4xl font-bold" >Our <span class="text-green-600">Products</span></div>
            </div>
              <swiper
        slidesPerView="auto"
    
        :spaceBetween="10"
        :centeredSlides="false"
        :pagination="{
            clickable: true,
        }"
        :modules="modules"
        :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        }"
        :breakpoints="{
            '640': {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            '768': {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            '1024': {
                slidesPerView: 4,
                spaceBetween: 50,
            },
        }"
       
        class="mySwiper"
      >
     
      <swiper-slide class="w-80 max-w-70 h-90 relative" v-for="product, index in products" :key="index">
    
      <SwiperSlideComp :name="product.name" :image="product.image" :description="product.description"/>
   </swiper-slide>
      </swiper>
        </div>
           <div class="px-4 py-16 lg:flex lg:items-center lg:justify-center bg-orange-100">
                  <div class="max-w-7xl w-full md:flex items-center gap-10 justify-between">
                          <h2 class="text-2xl font-semibold tracking-tight font-poppins text-gray-800 xl:text-3xl dark:text-white inline-block">
                                Download our <span class="text-green-500">brochure</span>
                            </h2>

                            <div class="mt-8 lg:mt-0 md:inline-block">
                                <div class="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:-mx-2">
                                    <a target="_blank" href="https://asset.cloudinary.com/dfweyw2vq/b617a0c7db25883f7219013a3be84861" class="px-6 py-2 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg focus:ring focus:ring-green-300 text-center fo sm:mx-2 hover:bg-green-500 border-none focus:bg-green-500 no-underline font-poppins">
                                       Download
                                    </a>
                                </div>

                            </div>
                  </div>
                    </div>
                      <div class="absolute top-0 right-0">
                                <img src="/img/palmRT.png" alt="" class="w-48 md:w-72 opacity-20">
                            </div>
                
    </section>
</template>
<script setup>
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay} from 'swiper';
import SwiperSlideComp from './swiperSlideComp.vue';
// swiper

let modules = [Autoplay]

// swiper end
let products = [
    {
        name: 'Geo Textiles',
        description: 'Coir geo textiles have the mechanical strength necessary to hold soil in place and prevent erosion. The netting breaks up run-off heavy rains and dissipates the energy of flowing water. Coir also promotes the growth of new vegetation by absorbing water and preventing the topsoil from drying out.',
        image: '/img/products/GeoTextile.jpeg',

    },
    {
        name: 'Coir Logs',
        description: `Coconut coir log is a biodegradable erosion control product for hills, banks, shorelines, and other erosion-prone areas, made of 100% natural coir fibers compressed in tubular mesh netting. It is easy to install and these coir fiber logs have been effectively used for erosion control in restoration projects, stabilization areas, and construction job sites.`,
        image: '/img/products/coirlogs.jpg',

    },
    {
        name: 'Door Mat',
        description: 'Coir mats Coir Rugs and Coir doormats are made up of 100% natural fibers. These environmentally-friendly, natural fibers are derived from the husk of the coconut. The husk is the water-resistant layer between the outer coating of the coconut and the hard shell inside. The durability, natural feel, cost effectiveness, versatility, anti-slippery characteristics makes it unique among other products.',
        image: 'https://cdn.shopify.com/s/files/1/2234/5783/products/image_ffdfae1e-0d9f-4f96-9173-e486355020b2_x1200_crop_center.progressive.jpg?v=1622360442',

    },
    {
        name: 'coir rug',
        description: 'Coir mats Coir Rugs and Coir doormats are made up of 100% natural fibers. These environmentally-friendly, natural fibers are derived from the husk of the coconut. The husk is the water-resistant layer between the outer coating of the coconut and the hard shell inside. The durability, natural feel, cost effectiveness, versatility, anti-slippery characteristics makes it unique among other products.',
        image: 'https://img3.exportersindia.com/product_images/bc-full/2021/6/4744109/coir-rugs-1623923647-5861985.jpeg',

    },
    {
        name: 'coir mattings',
        description: 'Coir mats Coir Rugs and Coir doormats are made up of 100% natural fibers. These environmentally-friendly, natural fibers are derived from the husk of the coconut. The husk is the water-resistant layer between the outer coating of the coconut and the hard shell inside. The durability, natural feel, cost effectiveness, versatility, anti-slippery characteristics makes it unique among other products.',
        image: 'http://3.imimg.com/data3/DS/HY/MY-8263525/coir-matting-500x500.jpg',

    },
    {
        name: 'Coco Peat',
        description: 'Quality coco peat is an excellent substrate for cultivation and will have good water retention.coco peat is washed with clean and natural water to lower ec levels, which is very important for root and plant growth and washed coco peat is heat-treated, screened, and graded before being processed into coco peat products of various granularity and denseness .Coco peat contains many air pockets that increase the surface area for the root system that provides better absorption of nutrients from the soil.',
        image: '/img/products/cocoPeat.jpeg',

    },


    {
        name: 'Coir Fiber',
        description: `Coir is a natural fiber extracted from the outer husk of coconut and used in products such as floor mats, doormats, brushes ,rope,brushes and mattresses. Coir consists of 2 types of fibers , brown and white .Brown fiber is obtained from mature coconuts, it is thick, strong ,has a high abrasion resistance and is used in mats, brushes and sacking. White fiber which is extracted from immature green coconuts are smoother and finer, but also weaker. They are generally spun to make yarn used in mats or rope.`,
        image: '/img/products/fiber.jpeg',

    },
    {
        name: 'Garden Articles',
        description: 'Coir Pot is a biodegradable cultivation pot made of coconut fibers. It is used for horticulture, ornamental plant and nurseries, as well as for the domestic gardening market. It has an exceptionally high permeability to water, air, and roots. Coir pot is used by those looking for faster cultivation.',
        image: '/img/products/garden.jpeg',

    },


]
</script>