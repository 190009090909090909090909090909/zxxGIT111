import http from './http'

interface Login{
    username:string
    password: string
}
export const loginApi = (params: Login)=>http.post('/admin/login',params)