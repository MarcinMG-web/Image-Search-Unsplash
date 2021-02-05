import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY

const api = axios.create({
    baseURL: `https://api.unsplash.com/`,
})

//https://api.unsplash.com/search/photos?query=office&client_id=YOUR_ACCESS_KEY


export const getAllPhotoByName = async (fromInput) => {
    try {
        return await api.get(`/search/photos?query=${fromInput}&client_id=${apiKey}`)
            .then(({
                data
            }) => data.results);

    } catch (err) {
        console.log(err)
    }
}