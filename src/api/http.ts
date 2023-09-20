import axios from "axios";

const instancee = {
    baseURL: 'http://shop_api.chaohua-sxx.cn',
    timeout: 3000,
};

class Http {
    instance: any;
    constructor(baseUrl: any) {
        this.instance = axios.create(baseUrl)
        this.instance.interceptors.request.use((config: any) => {
            // 在发送请求之前做些什么
            let token = localStorage.getItem('token')
            if (token) {
                config.headers.token = token
            }
            return config;
        }, function (error:any) {
            // 对请求错误做些什么
            return Promise.reject(error);
        });

        // 添加响应拦截器
        this.instance.interceptors.response.use((res: any) => {
            // 2xx 范围内的状态码都会触发该函数。
            // 对响应数据做点什么
            return res.data;
        }, function (error:any) {
            // 超出 2xx 范围的状态码都会触发该函数。
            // 对响应错误做点什么
            return Promise.reject(error);
        });
    }
    get(url: string,params:any={}){
        return this.instance.get(url,{params})
    }
    put(url: string, params: any = {}){
        return this.instance.put(url,params)
    }
    post(url: string, params: any = {}){
        return this.instance.post(url,params)
    }
    delete(url: string, params: any = {}){
        return this.instance.delete(url, params)
    }
}

export default new Http(instancee)