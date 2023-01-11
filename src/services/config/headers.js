import axios from "axios";
axios.defaults.baseURL = 'https://www.lotfirahim.ir/api';

const token = localStorage.getItem('token')
const headers = {
    'Content-Type': 'application/json',
     token
}

export default headers