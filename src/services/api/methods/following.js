import { authGetRequest } from '../';

export const FollowingOutfitApi = (payload) => authGetRequest(`/outfits/following`, payload);