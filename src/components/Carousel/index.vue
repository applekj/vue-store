<template>
    <div class="swiper-container" ref="mySwiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(ele, index) in data" :key="index">
                <img :src="ele" />
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
</template>

<script>
import Swiper from 'swiper'

export default {
    name: 'Carousel',
    props: ['data'],
    watch: {
        data: {
            immediate: true,
            handler(newVal, oldVal) {
                this.$nextTick(() => {
                    new Swiper(this.$refs.mySwiper, {
                        loop: true, // 循环模式选项
                        direction: 'horizontal',

                        autoplay: {
                            delay: 1000
                        },

                        pagination: {
                            el: '.swiper-pagination',
                            clickable: true
                        },

                        navigation: {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        },

                    })
                })
            }
        }
    }
}
</script>