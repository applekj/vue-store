import { reqGetSearchInfo } from "@/api"

const state = {
    searchInfo: {}
}
const mutations = {
    GETSEARCHINFO(state, searchInfo) {
        state.searchInfo = searchInfo
    }
}
const actions = {
    async getSearchInfo({ commit }, params) {
        const result = await reqGetSearchInfo(params)
        if (result.code == 200) {
            commit('GETSEARCHINFO', result)
        }
    }
}
const getters = {
    goodsList({ searchInfo }) {
        return searchInfo?.data?.goodsList || []
    },
    trademarkList({ searchInfo }) {
        return searchInfo?.data?.trademarkList || []
    },
    attrsList({ searchInfo }) {
        return searchInfo?.data?.attrsList || []
    }
}

export default {
    state, mutations, actions, getters
}