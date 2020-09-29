import axios from 'axios'


const instance = axios.create({
    baseURL : 'https://mynotes-4cfb8.firebaseio.com',
    timeout : 5000
})



export default instance