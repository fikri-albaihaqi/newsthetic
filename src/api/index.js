import axios from 'axios'

const url = 'https://newsapi.org/v2'
const apiKey = 'f7aa06702b2844f19df37a220907cfc2'

export const getTopHeadlines = () => axios.get(`${url}/top-headlines?country=id&apiKey=${apiKey}`)

export const getEntertainment = () => axios.get(`${url}/top-headlines?country=id&category=entertainment&apiKey=${apiKey}`)

export const getSports = () => axios.get(`${url}/top-headlines?country=id&category=sports&apiKey=${apiKey}`)

export const getBusiness = () => axios.get(`${url}/top-headlines?country=id&category=business&apiKey=${apiKey}`)

export const getScience = () => axios.get(`${url}/top-headlines?country=id&category=science&apiKey=${apiKey}`)

export const getTechnology = () => axios.get(`${url}/top-headlines?country=id&category=technology&apiKey=${apiKey}`)

export const getHealth = () => axios.get(`${url}/top-headlines?country=id&category=health&apiKey=${apiKey}`)
