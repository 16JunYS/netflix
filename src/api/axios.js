import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "9bcfaa7006a34bc125ec6a4621298416",
        language: "ko-KR",
    },
});

export default instance;