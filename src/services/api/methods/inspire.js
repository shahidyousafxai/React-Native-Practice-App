import { authGetRequest } from '../';

export const inspireApi = (payload) => authGetRequest(`/outfits/inspire`, payload);