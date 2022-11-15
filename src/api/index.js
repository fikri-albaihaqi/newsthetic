import axios from 'axios'

const url = 'https://newsapi.org/v2'
const apiKey = 'f7aa06702b2844f19df37a220907cfc2'

export const getTopHeadlines = (category) => axios.get(`${url}/top-headlines?country=id&category=${category}&apiKey=${apiKey}`)

export const search = (query) => axios.get(`${url}/everything?language=id&q=${query}&apiKey=${apiKey}`)

