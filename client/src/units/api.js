import axios from 'axios'; 


import api from './axiosConfig'; 

const fetchDataFromApi = async (url) => {
  try {
    const response = await api.get(url);
    const { data } = response;
    return data;
  } catch (error) {
    console.error('API Error:', error);
    return error;
  }
};

export const makePaymentRequest = axios.create({
  baseURL: process.env.REACT_APP_DEV_URL,
  headers: {
    Authorization: "Bearer " + process.env.REACT_APP_STRIPE_APP_KEY,
  },
});

export { fetchDataFromApi };