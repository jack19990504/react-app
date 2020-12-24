import axios from 'axios';

export default axios.create({
    baseURL : 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID nKGMLKh5xwojW_fymg-lup-fLpW0m5EcXBPKxcwdQPE'
    }
});
