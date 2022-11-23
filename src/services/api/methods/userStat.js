import { authGetRequest, getRequestWithPayload } from '../';

export const userStatApi = (payload) => getRequestWithPayload("/user-stats?user_id=", payload);

export const UserProfileApi = () => authGetRequest('/user_profile');