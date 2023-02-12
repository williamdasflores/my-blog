import axios from "axios"

const BASE_URL = "https://jsonplaceholder.typicode.com/"
const withBaseUrl = path => `${BASE_URL}${path}`;

export class PostService  {
    static getFirstFivePost() {
        return axios(withBaseUrl("comments?_limit=5"))
    }

    static getPosts() {
        return axios(withBaseUrl("comments"))
    }

    static getPostById(id) {
        return axios(withBaseUrl(`comments/${id}`));
    }
}