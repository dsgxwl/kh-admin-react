import axios from 'axios'
import qs from 'qs'

import { from } from 'rxjs';
import { message } from 'antd';


var baseURL = '';


if(process.env.NODE_ENV=='development'){
    baseURL = 'https://www.ceshi.com1';
}

if(process.env.NODE_ENV=='production'){
    baseURL = 'https://www.ceshi.com2';
}

axios.defaults.withCredentials = true

// 发送时
axios.interceptors.request.use(config => {
    // 开始
    // 统一加上服务端前缀
    let url = config.url;
    if (!url.startsWith('https://') && !url.startsWith('http://')) {
        config.url = baseURL + url;
    }
    const token = localStorage.getItem('token') || '';
    token && (config.headers.Authorization = token);
    return config
}, err => {
    return Promise.reject(err)
})

// 响应时
axios.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    },
    error => {
        if (error.response.status) {
            switch (error.response.status) {
                case 401:
                    message.error('请求401');
                    break;
                case 403:
                    message.error('请求403');
                    break;
                case 404:
                    message.error('请求404');
                default:
            }
            return Promise.reject(error.response);
        }
    })


export default {
    get(url, params) {
        if (!url) return
        return from(axios({
            method: 'get',
            url: url,
            params,
            timeout: 30000
        }))
    },
    post(url, data) {
        if (!url) return
        return from(axios({
            method: 'post',
            url: url,
            data: qs.stringify(data),
            timeout: 30000
        }))
    }
}
