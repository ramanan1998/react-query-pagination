import axios from "axios";

const axiosConfig = axios.create({
    baseURL: "https://reqres.in/api/"
});

export const request = async (options) => {

    const onSuccess = response => response;

    const onError = error => {
        console.log(error);
        return error
    }

    return await axiosConfig(options).then(onSuccess).catch(onError);
}