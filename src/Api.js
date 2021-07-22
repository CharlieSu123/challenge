import axios from "axios";
const port = "http://localhost:3000/";
 
 const getUsers=()=>{
    return axios.get(`${port}/users`)
                .then((response)=>response.data)
                .catch((error)=>console.log(error.response))
}
 
 const getListOfAgesOfUsersWith=()=>{
    return axios.get(`${port}/users/age`)
                .then((response)=>response.data)
                .catch((error)=>console.log(error.response))
}

const Services = {
    getUsers,
    getListOfAgesOfUsersWith,
}
export default Services;