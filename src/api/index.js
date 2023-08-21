import request from "./request";
import requestMock from './requestMock'

export const reqCategoryList = async () => {
    return await request({ url: '/product/getBaseCategoryList', method: 'get' })
}

export const reqGetBannerList = async () => {
    return await requestMock.get('/banner')
}

export const reqGetFloorList = async () => {
    return await requestMock.get('/floor')
}

export const reqGetSearchInfo = async (params = {}) => {
    return await request({ url: '/list', method: 'post', data: { ...params } })
}