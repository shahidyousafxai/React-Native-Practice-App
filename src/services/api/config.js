import axios from 'axios';


const ServerURL = 'https://dev.letribe.com';
const LocalURL = 'http://localhost';

const ROOT_URL = __DEV__ ? LocalURL : LocalURL;

const BASE_URL = `${ROOT_URL}/api/v1`;

const client = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});