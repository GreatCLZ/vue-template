import Vue from 'vue'
import axios from 'axios'

const http = axios.create({
    timeout: 1000 * 30,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    }
});

/**
 * 请求拦截
 */
http.interceptors.request.use(config => {
    config.headers['token'] = Vue.cookie.get(''); // 请求头带上token---需要修改token名
    return config
}, error => {
    return Promise.reject(error)
});

export default http
