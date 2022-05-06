import axios from "axios"


//https://dev.lastbit.io/api/v0/
//http://localhost:8080/api/v0/
export const instanceV0 = axios.create({
	withCredentials: false,
	baseURL: `https://dev.lastbit.io/api/v0/`
});