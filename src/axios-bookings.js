import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://vctdev2.crm4.dynamics.com/api/data/v9.1/',
})

export default instance;
