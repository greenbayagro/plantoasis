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
        <Nav/>
        <HomeHero/>
        <HomeFeatures />
        <HomeAbout />
        <HomeProducts />
        <HomeContact />
        <Footer/>
    </div>
</template>


<script setup>
import AOS from "aos";
import "aos/dist/aos.css";
onMounted(() => {
    AOS.init()
    //       scrollTo({
    //     top: 0,
    //     behavior: "smooth",
    // });

})

</script>