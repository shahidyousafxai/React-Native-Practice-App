import { authPostRequest } from "../";

export const logoutUser = (payload) => {
    const res = authPostRequest('/auth/delete/token', payload);
    return res
}
