import request from "./request";

export const reqCategoryList = async () => {
    return await request({ url: '/product/getBaseCategoryList', method: 'get' })
}
