
import axios from 'axios';
const baseurl = "http://localhost:8000/api";

class dataHandler {
    fetchGitrepos = (options) => {
        const { language, page, limit } = options;
        return axios.get(`https://api.github.com/search/repositories?q=language:${language}&page=${page}&per_page=${limit}`).then(res => {
            return res;
        }).catch(err => {
            return null;
        })
    }

    setSearchResults = (options) => {
        let config = {
            totalitems: options.totalItems,
            search: options.search
        };
        return axios.post(`${baseurl}/user/search`, config)
            .then(res => {
                console.log(res);
            }).catch(err => {
                return null;
            })
    }


    fetchSearchResults = (options) => {
        const { language, page, limit } = options;
        return axios.get(`${baseurl}/admin/search?page=${page}&limit=${limit}&query=${language}`).then(res => {
            return res;
        }).catch(err => {
            return null;
        })
    }
}

export { dataHandler };