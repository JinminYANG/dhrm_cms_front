import {SWAGGER_BASE_URL} from "../config";
import axios from "axios";

// axios.defaults.xsrfCookieName = 'csrftoken';
// axios.defaults.xsrfHeaderName = "X-CSRFToken";
// axios.defaults.withCredentials = true;

const axiosClient = axios.create({
  baseURL: SWAGGER_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    // 'Authorization': `Bearer ${token}`,
    // 'Access-Control-Allow-Origin': 'http://192.168.0.50:7777/', // CORS 허용
    // 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS' // CORS 허용
  },
});


export const axiosClientFormData = axios.create({
  baseURL: `${SWAGGER_BASE_URL}`,
  timeout: 10000,
});

const axiosClientPostFormData = (url, formData) => {
  let ret;
  ret = axiosClientFormData.post(url, formData, {
    // withCredentials: true,
    // Cookie: "csrftoken=DmT8R3KYcvB4aylofYYguj9rnVmtna8N",
    // xsrfCookieName: "csrftoken",
    // xsrfHeaderName: "X-CSRFToken",
    headers: {
      "Content-Type": "multipart/form-data",
      // "Authorization": `Bearer ${token}`,
      // 'Access-Control-Allow-Origin': '*', // CORS 허용
      // 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS' // CORS 허용
    },
  });
  return ret;
}

const axiosClientPutFormData = (url, formData) => {
  let ret;
  ret = axiosClientFormData.put(url, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      // "Authorization": `Bearer ${token}`,
      // 'Access-Control-Allow-Origin': '*', // CORS 허용
      // 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS' // CORS 허용
    },
  });
  return ret;
};

const axiosClientDeleteFormData = (url, formData) => {
  let ret;
  ret = axiosClientFormData.delete(url, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      // "Authorization": `Bearer ${token}`,
      // 'Access-Control-Allow-Origin': '*', // CORS 허용
      // 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS' // CORS 허용
    },
  });
  return ret;
};

export const getContentList = async () => {
  try {
    return await axiosClient.get(`contents/`);
  } catch (e) {
    console.error(e);
  }
}