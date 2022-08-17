import axios from 'axios';

const BASE_REQUEST_URL = 'http://localhost:3003';

export const fetchData=()=>{
    return axios.get('${BASE_REQUEST_URL}/users').then((res) => res.data);
};