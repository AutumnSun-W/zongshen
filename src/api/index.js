import axios from 'axios'

let base = "http://49.235.84.175:8000";


export const POST=(url,params)=>{
    return axios.post(`${base}${url}`,params).then(res=>res.data)
}

export const GETD=(url,params)=>{
    return axios(`${base}${url}`,params).then(res=>res.data)
}

export const GET=(url,params)=>{
    return axios(`${base}${url}`,{params:params}).then(res=>res.data)
}


export const GETNo=(url)=>{
    return axios(`${base}${url}`).then(res=>res)
}