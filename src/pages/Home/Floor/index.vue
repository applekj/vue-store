<template>
    <div class="floor">
        <div class="py-container">
            <div class="title clearfix">
                <h3 class="fl">{{ data.name }}</h3>
                <div class="fr">
                    <ul class="nav-tabs clearfix">
                        <li class="active" v-for="(ele, index) in data.navList" :key="index">
                            <a href="#tab1" data-toggle="tab">{{ ele.text }}</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="tab-content">
                <div class="tab-pane">
                    <div class="floor-1">
                        <div class="blockgary">
                            <ul class="jd-list">
                                <li v-for="(ele, index) in data.keywords" :key="index">{{ ele }}</li>
                            </ul>
                            <img :src="data.imgUrl" />
                        </div>
                        <div class="floorBanner">
                            <Carousel :data="data.carouselList.map(item => item.imgUrl)" />
                        </div>
                        <div class="split">
                            <span class="floor-x-line"></span>
                            <div class="floor-conver-pit" v-for="(ele, index) in data.recommendList.slice(0, 2)"
                                :key="index">
                                <img :src="ele" />
                            </div>
                        </div>
                        <div class="split center">
                            <img :src="data.bigImg" />
                        </div>
                        <div class="split">
                            <span class="floor-x-line"></span>
                            <div class="floor-conver-pit" v-for="(ele, index) in data.recommendList.slice(2, 4)"
                                :key="index">
                                <img :src="ele" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script >
export default {
    name: 'Floor',
    props: ['data'],

}
</script>

<style scoped lang="less">
@import url(./index.less);
</style>