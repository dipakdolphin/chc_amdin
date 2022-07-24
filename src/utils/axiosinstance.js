import axios from 'axios'
import { history } from '../history'

const axiosInstance = (current_path = null) => {

    const baseURL = process.env.REACT_APP_BACKEND_URL;

    let headers = {};

    if (localStorage.token) {
        headers.Authorization = `Bearer ${localStorage.token}`;
    }

    const axiosInstance = axios.create({
        baseURL:baseURL,
        headers,
    });

    axiosInstance.interceptors.response.use(
        (response) => new Promise(
            (resolve, reject) =>{
                resolve(response);
            }),

        (error) => {
            if(!error.response){
                return new Promise((resolve, reject) => {
                    reject(error)
                });
            }

            if(error.response.status===403){
                localStorage.removeItem('token');
                history.push("/login", {from: current_path});
            }else {
                return new Promise((resolve, reject) => {
                    reject(error);
                });
            }

        });

    return axiosInstance;


};

export default axiosInstance;
