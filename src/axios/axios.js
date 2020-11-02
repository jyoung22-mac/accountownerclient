import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://brokerage.herokuapp.com',
    headers: {
        headerType: 'example header type'
    }
});

export default instance;