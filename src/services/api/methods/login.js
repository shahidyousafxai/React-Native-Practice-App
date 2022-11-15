import { postRequest } from '../';

export const logInApi = (payload) => postRequest(`/login`, payload);