import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 61ffa6ee2caba0bdd5eeadb8a72aef958da21d0643824ed418fe6fa036f3d6c9'
    }
});