import { postRequest } from '../';


export const registerUserApi = (payload) => {
    const res = postRequest(`/register`, payload);
    return res;
}
