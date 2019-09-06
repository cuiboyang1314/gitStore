<!-- 轮播 -->
<template>
<div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide">slide1</div>
        <div class="swiper-slide">slide2</div>
        <div class="swiper-slide">slide3</div>
    </div>

    <!-- 分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 滚动条 -->
    <!--<div class="swiper-scrollbar"></div>-->
</div>
</template>

<script>
import Swiper from 'swiper';
import "../node_modules/swiper/dist/css/swiper.css";
export default {
    name: 'swiper',
    mounted () {
        new Swiper ('.swiper-container', {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            /*scrollbar: '.swiper-scrollbar',*/
            autoplay: {
                delay: 3000,
                stopOnLastSlide: false,
                disableOnInteraction: false,
            }
        })
    }
}

</script>
<style lang='less' scoped>
.swiper-container {
    //background: skyblue;
    height: 450px;
    border: 1px solid  #2dc6ff;
    border-top: 0px;
}
</style>