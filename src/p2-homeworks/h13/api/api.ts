import axios from "axios";

// api
export const api = {
    post(success: boolean) {
        return axios.post<AxiosResp>('https://neko-cafe-back.herokuapp.com/auth/test', success)
    }
}

//type
type AxiosResp = {
    success: boolean
}