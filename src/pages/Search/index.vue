<template>
    <div>
        <Linkage :showList="false" />
        <div class="main">
            <div class="py-container">
                <!--bread-->
                <div class="bread">
                    <ul class="fl sui-breadcrumb">
                        <li>
                            <a href="#">全部结果</a>
                        </li>
                    </ul>
                    <ul class="fl sui-tag">
                        <li class="with-x" v-if="searchParams.categoryName">{{ searchParams.categoryName }}
                            <i @click="removeCategoryName">×</i>
                        </li>
                        <li class="with-x" v-if="searchParams.keyword">{{ searchParams.keyword }}
                            <i @click="removeKeyword">×</i>
                        </li>
                    </ul>
                </div>

                <!--selector-->
                <SearchSelector />

                <!--details-->
                <div class="details clearfix">
                    <div class="sui-navbar">
                        <div class="navbar-inner filter">
                            <ul class="sui-nav">
                                <li class="active">
                                    <a href="#">综合</a>
                                </li>
                                <li>
                                    <a href="#">销量</a>
                                </li>
                                <li>
                                    <a href="#">新品</a>
                                </li>
                                <li>
                                    <a href="#">评价</a>
                                </li>
                                <li>
                                    <a href="#">价格⬆</a>
                                </li>
                                <li>
                                    <a href="#">价格⬇</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="goods-list">
                        <ul class="yui3-g">
                            <li class="yui3-u-1-5" v-for="(item, index) in goodsList" :key="index">
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <a href="item.html" target="_blank"><img :src="item.defaultImg" /></a>
                                    </div>
                                    <div class="price">
                                        <strong>
                                            <em>¥</em>
                                            <i>{{ item.price }}</i>
                                        </strong>
                                    </div>
                                    <div class="attr">
                                        <a target="_blank" href="item.html" :title="item.title">{{ item.title }}</a>
                                    </div>
                                    <div class="commit">
                                        <i class="command">已有<span>{{ item.hotScore }}</span>人评价</i>
                                    </div>
                                    <div class="operate">
                                        <a href="success-cart.html" target="_blank"
                                            class="sui-btn btn-bordered btn-danger">加入购物车</a>
                                        <a href="javascript:void(0);" class="sui-btn btn-bordered">收藏</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="fr page">
                        <div class="sui-pagination clearfix">
                            <ul>
                                <li class="prev disabled">
                                    <a href="#">«上一页</a>
                                </li>
                                <li class="active">
                                    <a href="#">1</a>
                                </li>
                                <li>
                                    <a href="#">2</a>
                                </li>
                                <li>
                                    <a href="#">3</a>
                                </li>
                                <li>
                                    <a href="#">4</a>
                                </li>
                                <li>
                                    <a href="#">5</a>
                                </li>
                                <li class="dotted"><span>...</span></li>
                                <li class="next">
                                    <a href="#">下一页»</a>
                                </li>
                            </ul>
                            <div><span>共10页&nbsp;</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SearchSelector from './SearchSelector'
import { mapState, mapGetters } from 'vuex';
export default {
    name: 'Search',
    data() {
        return {
            searchParams: {
                category1Id: '',
                category2Id: '',
                category3Id: '',
                categoryName: '',
                keyword: '',
                order: '',
                pageNo: 1,
                pageSize: 10,
                props: [],
                trademark: ''
            }
        }
    },
    components: {
        SearchSelector
    },
    computed: {
        ...mapGetters(['goodsList'])
    },
    methods: {
        getData() {
            this.$store.dispatch('getSearchInfo', this.searchParams)
        },
        removeCategoryName() {
            this.$router.push({ name: 'search', params: this.$route.params })
        },
        removeKeyword() {
            this.$router.push({ name: 'search', query: this.$route.query })
            this.$bus.$emit('clear')
        }
    },
    watch: {
        $route: {
            immediate: true,
            handler(newVal, oldVal) {
                this.$nextTick(() => {
                    Object.assign(this.searchParams, { category1Id: undefined, category2Id: undefined, category3Id: undefined, categoryName: undefined, keyword: undefined }, newVal.query, newVal.params)
                })
            }
        },
        searchParams: {
            handler() {
                this.getData()
            },
            deep: true
        }
    },
}
</script>

<style lang="less" scoped>
@import url('./index.less');
</style>