const axios = require("axios")
const { default: URL } = require("./apiConstant")

const api = axios.create({
    baseURL: URL.ROOT()
})

api.interceptors.request.use((config)=>{
    const token = localStorage.getItem('authToken')
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
}, (error)=> {return Promise.reject(error)}
)

api.interceptors.request.use((response)=> response, (error)=> {
    if (error.response && error.response.status == 401) {
        window.location.href = '/login'
    }

    return Promise.reject(error)
})

export default api