import { Services } from '../../services/crud.services'

export const actionTypes = {
    Login: "[Login] Action",
    Logout: "[Logout] Action",
    UserRequested: "[Request User] Action",
    UserLoaded: "[Load User] Check API"
}
export const authUrls = {
<<<<<<< HEAD
    LOGIN_URL: 'login',
    USER_URL: "user"
}
=======
  LOGIN_URL: Services.AUTH_URL,
  USER_URL: Services.USER_URL
};
>>>>>>> 29399402f9cabe37454440b81627148b441f7e3e
