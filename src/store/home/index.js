import { reqCategoryList, reqGetBannerList, reqGetFloorList } from "@/api"

const state = {
    categoryList: [],
    bannerList: [],
    floorList: []
}
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList
    },
    GETBANNERLIST(state, bannerList) {
        state.bannerList = bannerList
    },
    GETFLOORLIST(state, floorList) {
        state.floorList = floorList
    }
}
const actions = {
    async categoryList({ commit }) {
        const result = await reqCategoryList()
        if (result.code == 200) {
            commit('CATEGORYLIST', result.data.slice(0, 15))
        }
    },
    async getBannerList({ commit }) {
        const result = await reqGetBannerList()
        if (result.code == 200) {
            commit('GETBANNERLIST', result.data)
        }
    },
    async getFloorList({ commit }) {
        const result = await reqGetFloorList()
        if (result.code == 200) {
            commit('GETFLOORLIST', result.data)
        }
    }
}
const getters = {}

export default {
    state, mutations, actions, getters
}