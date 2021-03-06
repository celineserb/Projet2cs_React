import { Services } from '../../services/crud.services'

export const actionTypes = {
  Login: "[Login] Action",
  Logout: "[Logout] Action",
  UserRequested: "[Request User] Action",
  UserLoaded: "[Load User] Check API"
}
export const authUrls = {
  LOGIN_URL: Services.AUTH_URL,
  USER_URL: Services.USER_URL
};
