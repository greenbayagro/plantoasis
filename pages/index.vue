<template>
     
    <div class="max-w-screen overflow-hidden">
         <Head>
                <Title>Plant Oasis</Title>
                <Meta
                  name="description"
                  content="`Plant Oasis is an agro product based affiliate marketing company that is dedicated to promoting sustainable and organic agricultural practices and products`"
                />
                <Meta
                  name="keywords"
                  content="`agro,cocopeat, plant,nature, marketing, united states`"
                />
              </Head>
              <div class="flex flex-col gap-3 w-screen h-screen justify-center items-center" v-if="loading==true">
                 <div class="">
                   <img src="/logo.png" alt="" class="w-12"/>
                </div>
        <div class="flex gap-2">
          <div class="h-2.5 w-2.5 bg-orange-500 rounded-full animate-bounce"></div>
          <div class="h-2.5 w-2.5 bg-orange-500 rounded-full animate-[bounce_1s_infinite_200ms]"></div>
          <div class="h-2.5 w-2.5 bg-orange-500 rounded-full animate-[bounce_1s_infinite_400ms]"></div>
        </div>
             
              </div>
    <div class="" v-else>
          <Nav/>
          <HomeHero/>
          <HomeFeatures />
          <HomeAbout />
          <HomeProducts />
          <HomeContact />
          <Footer/>
    </div>
    </div>
</template>


<script setup>
import AOS from "aos";
import "aos/dist/aos.css";
let loading = ref(true)
onMounted(() => {
  AOS.init()
    loading.value = false
    //       scrollTo({
    //     top: 0,
    //     behavior: "smooth",
    // });

})

</script>