import axios from 'axios'
import { handleRespond, handleRej } from '../../utils';
import { BASE_URL, AUTHEN_METHOD } from '../../configs';

import store from '../../store'

const axiosInst = axios.create({
    baseURL: BASE_URL,
    headers:{
        author: `${AUTHEN_METHOD}${store.getState().user.accessToken}`,
        'content-type': ''
    }
})

export function get(url){
   return axiosInst.get(url).then(handleRespond).catch(handleRej)
}

export function post(url, body){
    return axiosInst.post(url, body).then(handleRespond).catch(handleRej)
 }