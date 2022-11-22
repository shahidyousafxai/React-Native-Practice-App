import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const local = 'http://localhost/api/v1';

// GET Request
export const getRequest = (url, payload) => {
  const res = axios.get(
    `${local}${url}`,
  );
  return res
};

// Authorized GET Request
export const authGetRequest = async (url) => {
  const token = await AsyncStorage.getItem("token");
  const headers = {
    "Authorization": `Bearer ${token}`,
  }
  const res = axios.get(
    `${local}${url}`,
    {
      headers: headers,
    },
  );
  return res
};
 // Authorized POST Request
 export const authPostRequest = async (url, payload) => {
  const token = await AsyncStorage.getItem("token");
  
  const headers = {
    "Authorization": `Bearer ${token}`,
  }
  const res = axios.post(
    `${local}${url}`,
    payload,
    {
       headers: headers,
    },
  );
  return res
};

//POST Request
export const postRequest = (url, payload) => {
  const res = axios.post(
    `${local}${url}`,
    payload,
    {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  );
  return res
};
export const patchRequest = (url, payload) => {
  const res = axios.patch(
    `${local}${url}`,
    payload,
  );
  return res
};
export const putRequest = (url, payload) => {
  const res = axios.put(
    `${local}${url}`,
    payload,
  );
  return res
};
export const deleteRequest = (url, payload) => {
  const res = axios.delete(
    `${local}${url}`,
    payload,
  );
  return res
};
