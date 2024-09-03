import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
        'Authorization': 'token'
    },
    withCredentials: true
})

export default instance;