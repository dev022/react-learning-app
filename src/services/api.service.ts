import axios, { AxiosRequestConfig } from "axios";
import { config } from "./api.config";


export class ApiService{
    url = config.api.url;
    
    // make get request
    get(url, params?:any){
        return axios.get(url, { params });
    }

    // make post request , config must be an object
    post(url, data:any , config?:AxiosRequestConfig<any>){
        return axios.post(url, data, config);
    }

    // make put request
    put(url, data:any, config?:AxiosRequestConfig<any>){
        return axios.put(url, data, config);
    }

    // make delete request
    delete(url, data:any){
        return axios.delete(url,{
            // headers: {
            //     "Content-Type": "application/json"
            // },
            data
        });
    }

    // make patch request
    patch(url, data:any, config?:AxiosRequestConfig<any>){
        return axios.patch(url, data, config);
    }

}