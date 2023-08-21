import axios from 'axios'
import nProgress from 'nprogress'
import 'nprogress/nprogress.css'

const request = axios.create({
    baseURL: '/mock',
    timeout: 10000
})

request.interceptors.request.use(config => {
    nProgress.start()
    return config
})

request.interceptors.response.use(
    res => {
        nProgress.done()
        return res.data
    },
    err => {
        return Promise.reject(new Error('faile'))
    }
)



export default request