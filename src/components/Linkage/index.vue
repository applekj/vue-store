<template>
    <div class="type-nav">
        <div class="container">
            <div @mouseleave="leaveIndex()">
                <h2 class="all" @mouseenter="showShop">全部商品分类</h2>
                <div class="sort" v-show="show">
                    <div class="all-sort-list2" @click="goSearch">
                        <div class="item" v-for="(c1, index) in categoryList" :key="c1.categoryId"
                            :class="currentIndex == index ? 'cur' : ''">
                            <h3 @mouseenter="changeIndex(index)">
                                <a href="" :data-categoryname="c1.categoryName" :data-category1Id="c1.categoryId">{{
                                    c1.categoryName }}</a>
                            </h3>
                            <div class="item-list clearfix" :style="{ display: currentIndex == index ? 'block' : 'none' }">
                                <div class="subitem" v-for="c2 in c1.categoryChild" :key="c2.categoryId">
                                    <dl class="fore">
                                        <dt>
                                            <a href="" :data-categoryname="c2.categoryName"
                                                :data-category2Id="c2.categoryId">{{ c2.categoryName }}</a>
                                        </dt>
                                        <dd>
                                            <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                                                <a href="" :data-categoryname="c3.categoryName"
                                                    :data-category2Id="c3.categoryId">{{ c3.categoryName }}</a>
                                            </em>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav class="nav">
                <a href="###">服装城</a>
                <a href="###">美妆馆</a>
                <a href="###">尚品汇超市</a>
                <a href="###">全球购</a>
                <a href="###">闪购</a>
                <a href="###">团购</a>
                <a href="###">有趣</a>
                <a href="###">秒杀</a>
            </nav>

        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import _ from 'lodash'

export default {
    name: 'Linkage',
    data() {
        return {
            currentIndex: -1,
            show: true
        }
    },
    mounted() {
        this.$store.dispatch('categoryList')
        if (this.$route.path == '/home') {
            this.show = true
        } else {
            this.show = false
        }
    },
    computed: {
        ...mapState({
            categoryList: state => {
                const arr = state.home.categoryList
                arr.pop()
                return arr
            }
        })
    },
    methods: {
        changeIndex: _.throttle(function (index) {
            this.currentIndex = index
        }, 50),
        leaveIndex() {
            this.currentIndex = -1
            if (this.$route.path == '/search') {
                this.show = false
            }
        },
        goSearch(e) {
            e.preventDefault()
            const element = e.target
            const { categoryname, category1id, category2id, category3id } = element.dataset
            this.$router.push({
                name: 'search',
                query: {
                    category1id,
                    category2id,
                    category3id,
                    categoryname
                }
            })
        },
        showShop() {
            if (this.$route.path == '/search') {
                this.show = true
            }
        }
    },
}
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>