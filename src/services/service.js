import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY

const api = axios.create({
    baseURL: `https://api.unsplash.com/`,
})


export const getAllPhotoByName = async (page,fromInput) => {
    try {
         return await api.get(`/search/photos?page=${page}&query=${fromInput}&client_id=${apiKey}`)
            .then(({
                data
            }) => data.results);

    } catch (err) {
        console.log(err)
    }
}